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
  selector: 'product-add',
  templateUrl: '../views/product-add.html',
  providers: [ProductService]
})
/**
* ProductAddComponent
*
*/
export class ProductAddComponent {

  public title: string;
  public product: Product;
  /**
  * constructor
  *
  */
  constructor(){
    this.title = 'Create a new product';
    this.product = new Product(0,'','',0,'');
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    console.log('product-add.component.ts loaded...');
  }
  /**
  * onSubmit
  *
  */
  onSubmit(){
    console.log(this.product);
  }

}
