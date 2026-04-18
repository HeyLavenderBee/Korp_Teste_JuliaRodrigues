import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaxNote } from '../tax-note';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetTaxNotes {
  private apiUrl = 'https://localhost:7027/api/taxnote/gettaxnotes';
  private taxNotesSubject = new BehaviorSubject<any[]>([]);
  taxNotes$ = this.taxNotesSubject.asObservable();

  constructor (private http: HttpClient) {}

  getTaxNotes(){
    return this.http.get<TaxNote[]>(this.apiUrl);
  }

  refreshTaxNotes(){
    this.getTaxNotes().subscribe(list => this.taxNotesSubject.next(list));
  }
}
