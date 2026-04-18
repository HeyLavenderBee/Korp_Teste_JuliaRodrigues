  import { Component, inject } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { GetProducts } from '../../services/stock-service/get-products';

  @Component({
    selector: 'app-products-table',
    imports: [CommonModule],
    templateUrl: './products-table.html',
    styleUrl: './products-table.css',
  })
  export class ProductsTable{
    getProducts = inject(GetProducts);
    products$ = this.getProducts.products$;
    productsList: any[] = [];

    //inicia ciclo de vida do componente
    ngOnInit() {
      this.getProducts.refreshProducts();
    }
  }
