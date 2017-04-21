//Component Decorator
//Function that anotates specific functions
import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate?: number
}

//Component holds metadata for this particular component
@Component({
  selector: 'app-root', //Creates de element in the html app-root
  //array Reference to our Sass file
  styleUrls: ['app.component.scss'],
  // ` backtick ES6 for creating multi-line strings
  template: `
    <div class="app">
      <h1>Airline Passengers (first method - class.checked-in)</h1>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullName }}

          <p>JSON Pipe: {{ passenger | json}}</p>
          <div class="date">
            Check in date:
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'd MMMM y' | uppercase) : 'Not checked in'}}
          </div>
        </li>
      </ul>
    <div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullName: 'Earl Campbell',
    checkedIn: false,
    checkInDate: 1492762309363
  }, {
    id: 2,
    fullName: 'Wanda Flores',
    checkedIn: true,
        checkInDate: 1492722309363
  }, {
    id: 3,
    fullName: 'Emily Knight',
    checkedIn: true,
    checkInDate: 1492622309363
  }, {
    id: 4,
    fullName: 'Shawn Howard',
    checkedIn: true,
    checkInDate: 1492522309363
  }, {
    id: 5,
    fullName: 'Paula Wright',
    checkedIn: false,
    checkInDate: null
  }, {
    id: 6,
    fullName: 'Elizabeth Owens',
    checkedIn: true,
    checkInDate: 1492322309363
  }, {
    id: 7,
    fullName: 'Debra Johnson',
    checkedIn: true,
    checkInDate: 1492122309363
  }, {
    id: 8,
    fullName: 'Sean Harris',
    checkedIn: false,
    checkInDate: 1491922309363
  }, {
    id: 9,
    fullName: 'Helen Grant',
    checkedIn: true,
    checkInDate: 1491622309363
  }, {
    id: 10,
    fullName: 'Aaron Scott',
    checkedIn: false,
    checkInDate: 1491222309363
  }]

  constructor() {
  }

}
