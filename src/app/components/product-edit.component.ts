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
  public is_edit;
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
    this.is_edit = true;
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit() {
    console.log(this.title);
    this.getProduct();
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
        this.updateProduct();

      }, (error) =>{
        console.log(error);
      });
    }else{
      this.updateProduct();
    }

  }
  /**
  * updateProduct
  *
  */
  updateProduct() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._productService.updateProduct(id, this.product).subscribe(
        response => {
          if(response.code == 200){
            this._router.navigate(['/product', id]);
          }else{
            console.log(response);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
  /**
  * fileChangeEvent
  *
  */
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
  /**
  * getProduct
  *
  */
  getProduct() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._productService.getProduct(id).subscribe(
        response => {
          if(response.code == 200){
            this.product = {
              id : response.data.id,
              name : response.data.nombre,
              description : response.data.descripcion,
              price : response.data.precio,
              image : response.data.imagen
            };
          }else{
            this._router.navigate(['/products']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

}
