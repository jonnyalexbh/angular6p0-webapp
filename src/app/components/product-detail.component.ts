import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
/**
* decorator
*
*/
@Component({
  selector: 'producto-detail',
  templateUrl: '../views/product-detail.html',
  providers: [ProductService]
})
/**
* ProductoDetailComponent
*
*/
export class ProductDetailComponent {
  public product: Product;
  /**
  * constructor
  *
  */
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit() {
    console.log('product-detail.Component.ts loaded...');
  }

}
