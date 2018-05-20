import { Component } from '@angular/core';
/**
* decorator
*
*/
@Component({
  selector: 'error',
  templateUrl: '../views/error.html'
})
/**
* ErrorComponent
*
*/
export class ErrorComponent {

  public title:string;
  /**
  * constructor
  *
  */
  constructor(){
    this.title = "Error!! Page not found."
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    console.log("Component error.component.ts loaded");
  }
}
