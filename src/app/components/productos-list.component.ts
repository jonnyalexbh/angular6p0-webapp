import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
/**
* decorator
*
*/
@Component({
  selector: 'productos-list',
  templateUrl: '../views/productos-list.html'
})
/**
* ProductosListComponent
*
*/
export class ProductosListComponent {

  public title: string;
  /**
  * constructor
  *
  */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'List of products';
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    console.log('productos-list.component.ts loaded');
  }

}
