import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsTable } from '../products-table/products-table';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [ProductsTable, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  goToTaxNotes(){
    this.router.navigate(['/notas-fiscais']);
  }

  goToProducts(){
    this.router.navigate(['/produtos']);
  }
}
