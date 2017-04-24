import { Component, Input } from '@angular/core';

import { Passenger } from './../../modules/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json}}
      <div>
        Passenger name: <input type="text" name="fullName" [ngModel]="detail?.fullName">
      </div>
      <div>
        Passenger Id: <input type="number" name="id" [ngModel]="detail?.id">
      </div>
      {{ form.value | json }}
    </form>
  `
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;

}
