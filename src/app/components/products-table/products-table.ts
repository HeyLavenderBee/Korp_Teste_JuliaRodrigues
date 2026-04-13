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
    private intervalId: any;
    products$ = this.getProducts.products$;
    productsList: any[] = [];

    //inicia ciclo de vida do componente
    ngOnInit() {
      this.getProducts.refreshProducts();
    }

    //ciclo de vida termina quando sai da página, pro timer não ficar sempre rodando
    ngOnDestroy() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }

    makeProductsList(){
      this.getProducts.getProducts().subscribe({
        next: (dados) => {
          this.productsList = dados;
          console.log(this.productsList);
        },
        error: (erro) => {
          console.error('Ocorreu um erro na conexão:', erro);
        },
      });
      this.getProducts.refreshProducts();
    }
  }
