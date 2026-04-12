import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProducts {
  private apiUrl = 'https://localhost:5001/api/produtos'; //url da api

  constructor(private http: HttpClient){ }

  getProducts(){
    console.log("caminho da api: ",this.apiUrl);
  }
}
