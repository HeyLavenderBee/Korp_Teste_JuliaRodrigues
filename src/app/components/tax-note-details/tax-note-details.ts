import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Header } from '../header/header';
import { EditTaxNote } from '../../services/invoicing-service/edit-tax-note';

@Component({
  selector: 'app-tax-note-details',
  imports: [Header],
  templateUrl: './tax-note-details.html',
  styleUrl: './tax-note-details.css',
})
export class TaxNoteDetails {
  editTaxNote = inject(EditTaxNote);

  constructor (private route: ActivatedRoute){}
  taxNoteId: string | null = "";
  taxNoteStatus: string = "";

  taxNote = {
    numeracao: "",
    status: "F",
    items: []
  }

  ngOnInit(){
    //quando o programa é iniciado, pega os parâmetros e atualiza textos da página
    this.taxNoteId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe(params => {
      this.taxNoteStatus = params["status"];
    })
    this.taxNote = {numeracao: this.taxNoteId+"", status: "F", items: []}
  }

  printTaxNote(){
    if (this.taxNoteStatus == "F"){
      alert("Nota fiscal está fechada, não é mais possível imprimi-la.");
    }
    else{
      this.editTaxNote.closeTaxNote(this.taxNote).subscribe({
        next: (response) => {
          console.log("Nota fiscal foi fechada. Resposta: ", response);
        },
        error: (error) => {
          console.log("Ocorreu um erro ao fechar a nota fiscal. Erro: ", error);
        }
      });;
    }
  }
}
