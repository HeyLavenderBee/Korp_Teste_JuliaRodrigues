import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Router } from '@angular/router';
import { GetTaxNotes } from '../../services/invoicing-service/get-tax-notes';
import { SendTaxNoteForm } from '../../services/invoicing-service/send-tax-note-form';

@Component({
  selector: 'app-tax-note-form',
  imports: [Header],
  templateUrl: './tax-note-form.html',
  styleUrl: './tax-note-form.css',
})
export class TaxNoteForm {
  getTaxNotes = inject(GetTaxNotes);
  sendTaxNoteForm = inject(SendTaxNoteForm);
  taxNotes$ = this.getTaxNotes.taxNotes$;
  response = "";

  constructor (private router: Router) {}

  newTaxNote = {
    numeracao: "000000001",
    status: "A",
  };

  ngOnInit(): void{
    this.getTaxNotes.taxNotes$.subscribe({
      next: (dados) => {
        this.response = JSON.stringify(dados, null, 2);
        console.log(this.response)
      },
      error: (err) => console.error("Erro ao buscar notas:", err)
    });
    
    this.getTaxNotes.refreshTaxNotes();
  }

  createTaxNote(){
    this.sendTaxNoteForm.saveTaxNote(this.newTaxNote).subscribe({
      next: (response) => {
        console.log("Nota fiscal salva com sucesso! Resposta: ", response);
        this.newTaxNote = {
          numeracao: "",
          status: "A"
        }
        this.getTaxNotes.refreshTaxNotes();
        this.router.navigate(['/notas-fiscais']);
      },
      error: (error) => {
        console.error("Erro ao adicionar nota fiscal: ", error);
      }
    })
  }
}
