import { Passenger } from './modules/passenger.interface';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule}  from '@angular/http';
import { FormsModule } from '@angular/forms';

// container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// components
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,

    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    //PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {

}
