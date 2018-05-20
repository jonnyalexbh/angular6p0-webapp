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
  /**
  * constructor
  *
  */
  constructor(){
    this.title = 'Create a new product';
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    console.log('product-add.component.ts loaded...');
  }

}
