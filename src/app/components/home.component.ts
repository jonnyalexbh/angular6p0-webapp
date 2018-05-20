import { Component } from '@angular/core';
/**
* decorator
*
*/
@Component({
  selector: 'home',
  templateUrl: '../views/home.html'
})
/**
* HomeComponent
*
*/
export class HomeComponent {

  public titulo: string;
  /**
  * constructor
  *
  */
  constructor(){
    this.titulo = 'Webapp of products with Angular 6';
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    console.log('The component has been loaded home.component.ts');
  }
}
