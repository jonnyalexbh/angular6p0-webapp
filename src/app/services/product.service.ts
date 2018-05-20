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
    return "TEXT FROM THE SERVICE";
  }

}
