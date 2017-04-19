 //Component Decorator
 //Function that anotates specific functions
 import { Component } from '@angular/core';

//Component holds metadata for this particular component
@Component({
  selector: 'app-root', //Creates de element in the html app-root
  //array Reference to our Sass file
  styleUrls: ['app.component.scss'],
  // ` backtick ES6 for creating multi-line strings
  template: `
    <div class="app">
      <div>{{ title + '!' }}<div>
      <div>{{ numberOne +  numberTwo}}<div>
      <div>{{ isHappy ? ':)' : ':(' }}<div>
    <div>
  `/*,
  //Alternative for templates:
  templateUrl: './app.component.html'*/
})
 export class AppComponent {   
    title: string;
    isHappy: boolean = true;
    numberOne: number = 1;
    numberTwo: number = 2;

    constructor(){
      this.title = 'Ultimate Angular';
    }
 }