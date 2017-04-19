//Module: Container for modules, services, ...
import { NgModule } from '@angular/core';

// Browser App.
import { BrowserModule } from '@angular/platform-browser';

// Directives, pipes ...
import { CommonModule } from '@angular/common';

//Include exported AppComponent
import { AppComponent } from './app.component';

@NgModule({
  //Registering AppComponent
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule 
  ],
  //Boostrap App
  bootstrap: [AppComponent] //rootModule, that is the first angular module,  is the only one that boostrap the application
})
export class AppModule {}
