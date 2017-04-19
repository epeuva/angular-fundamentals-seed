//Component Decorator
//Function that anotates specific functions
import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean
}

//Component holds metadata for this particular component
@Component({
  selector: 'app-root', //Creates de element in the html app-root
  //array Reference to our Sass file
  styleUrls: ['app.component.scss'],
  // ` backtick ES6 for creating multi-line strings
  template: `
    <div class="app">
      <h1>Airline Passengers</h1>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
            {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>

      <h1>Airline Passengers</h1>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
            {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>
    <div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullName: 'Earl Campbell',
    checkedIn: false
  }, {
    id: 2,
    fullName: 'Wanda Flores',
    checkedIn: true
  }, {
    id: 3,
    fullName: 'Emily Knight',
    checkedIn: true
  }, {
    id: 4,
    fullName: 'Shawn Howard',
    checkedIn: true
  }, {
    id: 5,
    fullName: 'Paula Wright',
    checkedIn: false
  }, {
    id: 6,
    fullName: 'Elizabeth Owens',
    checkedIn: true
  }, {
    id: 7,
    fullName: 'Debra Johnson',
    checkedIn: true
  }, {
    id: 8,
    fullName: 'Sean Harris',
    checkedIn: false
  }, {
    id: 9,
    fullName: 'Helen Grant',
    checkedIn: true
  }, {
    id: 10,
    fullName: 'Aaron Scott',
    checkedIn: false
  }, {
    id: 11,
    fullName: 'Douglas Knight',
    checkedIn: true
  }, {
    id: 12,
    fullName: 'Catherine Owens',
    checkedIn: true
  }, {
    id: 13,
    fullName: 'Lisa Reyes',
    checkedIn: false
  }, {
    id: 14,
    fullName: 'Pamela Hudson',
    checkedIn: true
  }, {
    id: 15,
    fullName: 'Barbara Welch',
    checkedIn: true
  }, {
    id: 16,
    fullName: 'Harold Richards',
    checkedIn: false
  }, {
    id: 17,
    fullName: 'Jose Mills',
    checkedIn: true
  }, {
    id: 18,
    fullName: 'Judith Frazier',
    checkedIn: true
  }, {
    id: 19,
    fullName: 'Mildred Thomas',
    checkedIn: false
  }, {
    id: 20,
    fullName: 'Elizabeth Jacobs',
    checkedIn: true
  }]

  constructor() {
  }

}