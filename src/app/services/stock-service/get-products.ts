import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProducts {
  private apiUrl = 'https://localhost:7089/api/product/getproducts'; //url da api
  private productsSubject = new BehaviorSubject<any[]>([]); //para verificar alteração nos dados
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient){ }

  getProducts(){
    return this.http.get<Product[]>(this.apiUrl);
  }

  refreshProducts() {
    this.getProducts().subscribe(list => this.productsSubject.next(list));
  }
}
