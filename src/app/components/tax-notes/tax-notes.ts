import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Header } from '../header/header';
import { Router } from '@angular/router';
import { GetTaxNotes } from '../../services/invoicing-service/get-tax-notes';

@Component({
  selector: 'app-tax-notes',
  imports: [Header, AsyncPipe],
  templateUrl: './tax-notes.html',
  styleUrl: './tax-notes.css',
})
export class TaxNotes {
  getTaxNotes = inject(GetTaxNotes)
  taxNotes$ = this.getTaxNotes.taxNotes$;

  ngOnInit() {
    this.getTaxNotes.refreshTaxNotes();
  }

  constructor (private router: Router) {}

  goToTaxNoteDetails(id: string, status: string){
    this.router.navigate(['/notas-fiscais', id], {queryParams: {status: status}});
  }

  goToTaxNoteForms(){
    this.router.navigate(['/criar-nota-fiscal']);
  }
}
