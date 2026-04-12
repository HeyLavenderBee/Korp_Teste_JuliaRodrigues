import { Component, inject } from '@angular/core';
import { SendProductForm } from '../../services/stock-service/send-product-form';
import { GetProducts } from '../../services/stock-service/get-products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  sendProductForm = inject(SendProductForm);
  getProducts = inject(GetProducts);
  
  name = "Júlia";
  mostrarNota = true;
  listItems = ["nota1", "nota2"];

  newProduct = {
    nome: "",
    saldo: 0,
  };

  addProduct(){

    this.sendProductForm.saveProduct(this.newProduct).subscribe({
      next: (response) => {
        console.log("Produto salvo com sucesso! Resposta: ", response);
      },
      error: (error) => {
        console.error("Erro ao adicionar produto: ", error);
      }
    });
  }

  showProducts(){
    this.getProducts.getProducts().subscribe({
    next: (dados) => {
      console.log('Dados recebidos da API:', dados);
    },
    error: (erro) => {
      console.error('Ocorreu um erro na conexão:', erro);
    },
    complete: () => {
      console.log('Requisição finalizada com sucesso.');
    }
  });
  }
}
