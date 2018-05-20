import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { GLOBAL } from './global';
/**
* decorator
*
*/
@Injectable()
/**
* ProductService
*
*/
export class ProductService {

  public url: string;
  /**
  * constructor
  *
  */
  constructor(
    public _http: Http
  ){
    this.url = GLOBAL.url;
  }
  /**
  * getProducts
  *
  */
  getProducts(){
    return this._http.get(this.url+'products').pipe(map(res => res.json()));
  }
  /**
  * addProduct
  *
  */
  addProduct(product: Product){
    let json = JSON.stringify({
      "nombre": product.name,
      "descripcion": product.description,
      "precio": product.price
    });

    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'products', params, {headers: headers})
    .pipe(map(res => res.json()))
  }

}
