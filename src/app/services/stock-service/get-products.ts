import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProducts {
  private apiUrl = 'https://localhost:7089/products'; //url da api

  constructor(private http: HttpClient){ }

  getProducts(){
    return this.http.get(this.apiUrl);
  }
}
