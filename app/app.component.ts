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
        <input type="text" [value]="name" (input)="handleChange($event.target.value)">
        
        <p *ngIf="name.length > 2">Searching for... {{ name }}</p>

        <!-- *ngIf is syntax sugar of  <template [ngIf] -->
        <!-- see WebComponents or https://developer.mozilla.org/es/docs/Web/HTML/Elemento/template -->
        <template [ngIf]="name.length > 2">
           <p>Searching for... {{ name }}</p>
        </template>
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
    name: string = '';

    constructor(){
      this.title = 'Ultimate Angular';
    }

    handleChange(value: string){
      this.name = value;
      console.log('handleClick:', value);
    }
 }