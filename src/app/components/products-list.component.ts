import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
/**
* decorator
*
*/
@Component({
  selector: 'products-list',
  templateUrl: '../views/products-list.html',
  providers: [ProductService]
})
/**
* ProductsListComponent
*
*/
export class ProductsListComponent {

  public title: string;
  /**
  * constructor
  *
  */
  constructor(
    private _productService: ProductService,
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
    console.log(this._productService.getProducts());
  }

}
