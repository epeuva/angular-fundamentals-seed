import { Passenger } from './modules/passenger.interface';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule}  from '@angular/http';

// container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {

}
