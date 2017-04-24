import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from './../../passenger-dashboard.service';

import { Passenger } from './../../modules/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div class="passenger-dashboard">
      <passenger-count [items]="passengers"></passenger-count>
      <div *ngFor="let passenger of passengers;">
        {{ passenger.fullName}}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)"
      >
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) {

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => {
        this.passengers = data;
      })

    /*
    //Promise Example
    this.passengerService
      .getPassengersByPromise()
      .then((data: Passenger[]) => {
        this.passengers = data;
      })
    */
  }

  handleRemove(event: Passenger) {
    console.log('handleRemove', event);
     this.passengerService
      .removePassenger(event)
      .subscribe((data:Passenger) => {
        console.log('handleRemove.subscribe', data);
        this.passengers = this.passengers.filter( (passenger:Passenger) => {
          return passenger.id !== event.id;
        })
      });
  }

  handleEdit(event: Passenger) {
    console.log('handleEdit', event);
    this.passengerService
      .updatePassenger(event)
      .subscribe((data:Passenger) => {
        console.log('handleEdit.subscribe', data);

        this.passengers = this.passengers.map( (passenger: Passenger) => {
          if(passenger.id === event.id){
            //Immutable way of editing.
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });

    console.log(this.passengers);
  }

}
