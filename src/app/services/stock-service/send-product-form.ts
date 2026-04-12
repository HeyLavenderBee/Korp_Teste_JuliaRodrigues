import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class SendProductForm {
  private apiUrl = 'https://localhost:7089/products'; //url da api

  constructor(private http: HttpClient){ }

  saveProduct(product: Product){
    return this.http.post("https://localhost:7089/products", product);
  }
}
