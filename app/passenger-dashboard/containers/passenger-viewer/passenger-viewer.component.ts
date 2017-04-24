import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from '@angular/core';

import { PassengerDashboardComponent } from './../passenger-dashboard/passenger-dashboard.component';
import { Passenger } from './../../modules/passenger.interface';


@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template:`
    <div>
      <passenger-form [detail]="passenger">
      </passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerservice: PassengerDashboardService){

  }

  ngOnInit(){
    this.passengerservice
      .getPassenger(1)
      .subscribe((data: Passenger) => {
        this.passenger = data
      });
  }
}
