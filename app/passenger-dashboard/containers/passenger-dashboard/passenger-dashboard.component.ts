import { Component, OnInit } from '@angular/core';

import { Passenger } from './../../modules/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div class="passenger-dashboard">
      <passenger-count [items]="passengers"></passenger-count>
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

  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.passengers = [{
      id: 1,
      fullName: 'Earl Campbell',
      checkedIn: false,
      checkInDate: 1492762309363,
      children: null
    }, {
      id: 2,
      fullName: 'Wanda Flores',
      checkedIn: true,
      checkInDate: 1492722309363,
      children: [{ name: 'Lorem', age: 20 }, { name: 'Ipsum', age: 7 }]
    }, {
      id: 3,
      fullName: 'Emily Knight',
      checkedIn: true,
      checkInDate: 1492622309363,
      children: null
    }, {
      id: 4,
      fullName: 'Shawn Howard',
      checkedIn: true,
      checkInDate: 1492522309363,
      children: [{ name: 'Sit', age: 30 }]
    }, {
      id: 5,
      fullName: 'Paula Wright',
      checkedIn: false,
      checkInDate: null,
      children: null
    }, {
      id: 6,
      fullName: 'Elizabeth Owens',
      checkedIn: true,
      checkInDate: 1492322309363,
      children: null
    }, {
      id: 7,
      fullName: 'Debra Johnson',
      checkedIn: true,
      checkInDate: 1492122309363,
      children: [{ name: 'Amet', age: 25 }]
    }, {
      id: 8,
      fullName: 'Sean Harris',
      checkedIn: false,
      checkInDate: 1491922309363,
      children: null
    }, {
      id: 9,
      fullName: 'Helen Grant',
      checkedIn: true,
      checkInDate: 1491622309363,
      children: null
    }, {
      id: 10,
      fullName: 'Aaron Scott',
      checkedIn: false,
      checkInDate: 1491222309363,
      children: null
    }]
  }

  handleRemove(event: Passenger) {
    console.log('handleRemove', event);
    this.passengers = this.passengers.filter( (passenger:Passenger) => {
      return passenger.id !== event.id;
    })
  }

  handleEdit(event: Passenger) {
    console.log('handleEdit', event);
    this.passengers = this.passengers.map( (passenger: Passenger) => {
      if(passenger.id === event.id){
        //Immutable way of editing.
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    })
    console.log(this.passengers);
  }

}
