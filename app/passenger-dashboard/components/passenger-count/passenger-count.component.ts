import { Passenger } from './../../modules/passenger.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h1>Airline Passengers</h1>
      <div>
        Total Checked in: {{ checkedInCount() }}/{{ items?.length }}
      </div>
    </div>
  `
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];

  checkedInCount(): number{
    if(!this.items) return;
    return this.items.filter((passenger: Passenger) => {
      return passenger.checkedIn;
    }).length;
  }
}
