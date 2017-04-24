import { Passenger } from './../../modules/passenger.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input type="text" [value]="detail.fullName" (input)="onNameChange(name.value)" #name>
      </div>
      <div *ngIf="!editing">{{ detail.fullName }}</div>
      <div class="date">
        {{ detail.checkInDate ? (detail.checkInDate | date: 'd MMMM y' | uppercase) : 'Not checked in'}}
      </div>
      <div class="children">
        <!-- Safety check object properties  -->
        Children (Safe navigation operator [?]): {{ detail.children?.length || 0}}
      </div>
      <button (click)="toogleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
       <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent {

  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor(){}

  onNameChange(value: string) {
    this.detail.fullName = value;
  }

  toogleEdit() {
    if(this.editing) {
      console.log('Emiting toogleEdit event', this.detail);
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    console.log('Emiting onRemove event', this.detail);
    this.remove.emit(this.detail);
  }
}
