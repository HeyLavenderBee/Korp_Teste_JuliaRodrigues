import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SendProductForm } from '../../services/stock-service/send-product-form';
import { GetProducts } from '../../services/stock-service/get-products';
import { FormsModule } from '@angular/forms';
import { ProductsTable } from '../products-table/products-table';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ProductsTable, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  sendProductForm = inject(SendProductForm);
  getProducts = inject(GetProducts);

  newProduct = {
    descricao: "",
    saldo: 0,
  };

  goToTaxNotes(){
    this.router.navigate(['/notas-fiscais']);
  }

  addProduct(){
    if(this.newProduct.descricao == "" || this.newProduct.saldo < 0){
      alert("Por favor, preencha os campos corretamente!");
      return;
    }
    this.sendProductForm.saveProduct(this.newProduct).subscribe({
      next: (response) => {
        console.log("Produto salvo com sucesso! Resposta: ", response);
        this.newProduct = {
          descricao: "",
          saldo: 0
        }
        this.getProducts.refreshProducts();
      },
      error: (error) => {
        console.error("Erro ao adicionar produto: ", error);
      }
    });
  }
}
