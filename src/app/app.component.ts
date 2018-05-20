import { Component } from '@angular/core';
import { GLOBAL } from './services/global';
/**
* decorator
*
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
* AppComponent
*
*/
export class AppComponent {

  title = 'Products Angular 6';
  public header_color: string;
  /**
  * constructor
  *
  */
  constructor() {
    this.header_color = GLOBAL.header_color;
    console.log(this.header_color)
  }
}
