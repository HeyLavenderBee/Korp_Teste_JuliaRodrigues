import { Component, inject } from '@angular/core';
import { SendProductForm } from '../../services/send-product-form';
import { GetProducts } from '../../services/get-products';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  sendFormService = inject(SendProductForm);
  getProducts = inject(GetProducts);
  name = "Júlia";
  idButton = "ifasd";
  mostrarNota = true;
  listItems = ["nota 1", "nota2"];

  submit(){
    this.sendFormService.sendFormInfo("enviando informação");
  }

  showProducts(){
    console.log(this.getProducts.getProducts());
  }
}
