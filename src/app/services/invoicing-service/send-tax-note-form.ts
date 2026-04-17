import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaxNote } from '../tax-note';

@Injectable({
  providedIn: 'root',
})
export class SendTaxNoteForm {
  private apiUrl = 'https://localhost:7027/api/taxnote/createtaxnote';

  constructor (private http: HttpClient) {}

  saveTaxNote(taxNote: TaxNote){
    return this.http.post(this.apiUrl, taxNote);
  }
}
