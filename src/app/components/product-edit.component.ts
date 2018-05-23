import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { GLOBAL } from '../services/global';
/**
* decorator
*
*/
@Component({
  selector: 'product-edit',
  templateUrl: '../views/product-add.html',
  providers: [ProductService]
})
/**
* ProductEditComponent
*
*/
export class ProductEditComponent{
  public title: string;
  public product: Product;
  public filesToUpload;
  public resultUpload;
  /**
  * constructor
  *
  */
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'Edit product';
    this.product = new Product(1,'','',1,'');
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    console.log(this.title);
  }

}
