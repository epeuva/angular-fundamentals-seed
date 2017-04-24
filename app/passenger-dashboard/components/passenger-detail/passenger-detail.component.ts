import { Passenger } from './../../modules/passenger.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      {{ detail.fullName }}
      <div class="date">
        {{ detail.checkInDate ? (detail.checkInDate | date: 'd MMMM y' | uppercase) : 'Not checked in'}}
      </div>
      <div class="children">
        <!-- Safety check object properties  -->
        Children (Safe navigation operator [?]): {{ detail.children?.length || 0}}
      </div>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;
  constructor(){}
}
