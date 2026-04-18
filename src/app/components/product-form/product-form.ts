import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GetProducts } from '../../services/stock-service/get-products';
import { SendProductForm } from '../../services/stock-service/send-product-form';

@Component({
  selector: 'app-product-form',
  imports: [Header, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  constructor(private router: Router) {}

  sendProductForm = inject(SendProductForm);
  getProducts = inject(GetProducts);

  newProduct = {
    descricao: '',
    saldo: 0,
  };

  addProduct(qtyValue: any) {
    if (this.newProduct.descricao == '' || this.newProduct.saldo < 0 || qtyValue.value == "") {
      alert('Por favor, preencha os campos corretamente!');
      return;
    }
    this.sendProductForm.saveProduct(this.newProduct).subscribe({
      next: (response) => {
        console.log('Produto salvo com sucesso! Resposta: ', response);
        this.newProduct = {
          descricao: '',
          saldo: 0,
        };
        this.getProducts.refreshProducts();
        this.router.navigate(['/produtos']);
      },
      error: (error) => {
        console.error('Erro ao adicionar produto: ', error);
      },
    });
  }
}
