import { Component, inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { GetTaxNotes } from '../../services/invoicing-service/get-tax-notes';
import { SendTaxNoteForm } from '../../services/invoicing-service/send-tax-note-form';
import { GetProducts } from '../../services/stock-service/get-products';

@Component({
  selector: 'app-tax-note-form',
  imports: [Header, AsyncPipe],
  templateUrl: './tax-note-form.html',
  styleUrl: './tax-note-form.css',
})
export class TaxNoteForm {
  private cdr = inject(ChangeDetectorRef);
  getProducts = inject(GetProducts);
  getTaxNotes = inject(GetTaxNotes);
  sendTaxNoteForm = inject(SendTaxNoteForm);
  taxNotes$ = this.getTaxNotes.taxNotes$;
  products$ = inject(GetProducts).getProducts();
  selectedItems: { produtoId: number; quantidade: number; descricao: string }[] = [];
  currentId: string = '000.000.001';

  constructor(private router: Router) {}

  newTaxNote = {
    numeracao: '000000001',
    status: 'A'
  };

  //quando a página é aberta, faz o cálculo de qual a próxima numeração para uma nota fiscal
  ngOnInit(): void {
    this.getTaxNotes.taxNotes$.subscribe({
      next: (dados) => {
        const response = JSON.stringify(dados, null, 2); //transforma o json em uma string
        const responseArray = response.split('{'); //transforma ele em um array
        var numeracaoFor: number = 0;
        if (
          responseArray[responseArray.length - 1].includes('numeracao') &&
          responseArray.length - 1
        ) {
          numeracaoFor = +responseArray[responseArray.length - 1].substring(19, 28); //pegar toda a numeração da última nota fiscal
          numeracaoFor++; //adiciona mais 1
          let nextNumeracao = numeracaoFor + '';
          while (nextNumeracao.length != 9) {
            nextNumeracao = '0' + nextNumeracao;
          }

          this.currentId = nextNumeracao.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
          this.cdr.detectChanges();

          //por último, adiciona a numeração gerada no newTaxNotes, para poder fazer o post
          this.newTaxNote = {
            numeracao: nextNumeracao,
            status: 'A',
          };
        }
      },
      error: (err) => console.error('Erro ao buscar notas:', err),
    });

    this.getTaxNotes.refreshTaxNotes();
  }

  createTaxNote() {
    this.sendTaxNoteForm.saveTaxNote(this.newTaxNote).subscribe({
      next: (response) => {
        console.log('Nota fiscal salva com sucesso! Resposta: ', response);
        this.newTaxNote = {
          numeracao: '',
          status: 'A',
        };
        this.getTaxNotes.refreshTaxNotes();
        this.router.navigate(['/notas-fiscais']);
      },
      error: (error) => {
        console.error('Erro ao adicionar nota fiscal: ', error);
      },
    });
  }
}
