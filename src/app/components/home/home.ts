import { Component, inject } from '@angular/core';
import { SendProductForm } from '../../services/stock-service/send-product-form';
import { GetProducts } from '../../services/stock-service/get-products';
import { FormsModule } from '@angular/forms';
import { ProductsTable } from '../products-table/products-table';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ProductsTable],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  sendProductForm = inject(SendProductForm);
  getProducts = inject(GetProducts);

  newProduct = {
    nome: "",
    saldo: 0,
  };
  
  name = "Júlia";
  mostrarNota = true;
  listItems = ["nota1", "nota2"];

  addProduct(){
    if(this.newProduct.nome == "" || this.newProduct.saldo < 0){
      alert("Por favor, preencha os campos corretamente!");
      return;
    }
    this.sendProductForm.saveProduct(this.newProduct).subscribe({
      next: (response) => {
        console.log("Produto salvo com sucesso! Resposta: ", response);
        this.newProduct = {
          nome: "",
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
