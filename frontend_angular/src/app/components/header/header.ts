import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router){}

  goToHome(){
    this.router.navigate(['/']);
  }

  goToProducts(){
    this.router.navigate(['/produtos']);
  }

  goToTaxNotes(){
    this.router.navigate(['/notas-fiscais']);
  }
}
