import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
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
  public products: Product[];
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
    this._productService.getProducts().subscribe(
      result => {
        this.products = result.data;

        if(result.code != 200){
          console.log(result);
        }else{
          this.products = result.data;
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
