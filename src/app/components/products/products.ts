import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProductsTable } from '../products-table/products-table';

@Component({
  selector: 'app-products',
  imports: [Header, ProductsTable],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {}
