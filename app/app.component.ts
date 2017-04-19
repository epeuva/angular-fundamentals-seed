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
      <h1 [innerHTML]="title"></h1>
      <div>{{ numberOne +  numberTwo}}<div>
      <div>{{ isHappy ? ':)' : ':(' }}<div>
      <img [src]="logo">
      <input type="text" [value]="name" >
      <p>One-way dataflow example:</p>
      <div>{{ name }}</div>
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
    logo: string =  'img/logo.svg';
    name: string = 'Todd';

    constructor(){
      this.title = 'Ultimate Angular';
    }
 }