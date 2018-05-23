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
  public confirmed;
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
    this.confirmed = null;
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    console.log('productos-list.component.ts loaded');
    this.getProducts();
  }
  /**
  * getProducts
  *
  */
  getProducts() {
    this._productService.getProducts().subscribe(
      result => {

        if(result.code != 200){
          console.log(result);
        } else {
          this.products = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  /**
  * deleteConfirm
  *
  */
  deleteConfirm(id){
    this.confirmed = id;
  }
  /**
  * cancelarConfirm
  *
  */
  cancelConfirm(){
    this.confirmed = null;
  }
  /**
  * onDeleteProduct
  *
  */
  onDeleteProduct(id){
    this._productService.deleteProduct(id).subscribe(
      response => {
        if(response.code == 200){
          this.getProducts();
        }else{
          alert('Error when deleting product');
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
