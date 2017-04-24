import { Component, Input } from '@angular/core';

import { Passenger } from './../../modules/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form>
      Form ! <br>
      {{ detail | json}}
    </form>
  `
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;

}
