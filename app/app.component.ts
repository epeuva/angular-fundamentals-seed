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
      <div>
        <p>{{ numberOne +  numberTwo}} {{ isHappy ? ':)' : ':(' }}</p>
      </div>
      <img [src]="logo" />      
      <div>
        <button (click)="handleClick()">Change name</button>
        <input type="text" [value]="name" (blur)="handleBlur($event)" (input)="handleInput($event)">
        <p>{{ name }}</p>
      </div>
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

    handleBlur(event: any){
      this.name = event.target.value;
      console.log('handleBlur:', event);
    }

    handleInput(event: any){
      this.name = event.target.value;
    }

    handleClick(){
      this.name = 'Motto';
      console.log('handleClick:', event);
    }
 }