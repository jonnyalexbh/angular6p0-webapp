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
  onSubmit() {
    console.log(this.product);
    if(this.filesToUpload && this.filesToUpload.length >= 1){
      this._productService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result) => {
        console.log(result);
        this.resultUpload = result;
        this.product.image = this.resultUpload.filename;
        this.saveProduct();

      }, (error) =>{
        console.log(error);
      });
    }else{
      this.saveProduct();
    }
  }
  /**
  * saveProduct
  *
  */
  saveProduct(){
    this._productService.addProduct(this.product).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/products']);
        }else{
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  /**
  * fileChangeEvent
  *
  */
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
