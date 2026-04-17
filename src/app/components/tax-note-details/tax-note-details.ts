import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-tax-note-details',
  imports: [Header],
  templateUrl: './tax-note-details.html',
  styleUrl: './tax-note-details.css',
})
export class TaxNoteDetails {
  private route = inject(ActivatedRoute);
  taxNoteId: string | null = null;

  ngOnInit(){
    this.taxNoteId = this.route.snapshot.paramMap.get('id');
    console.log("código da nota fiscal: ", this.taxNoteId);

  }
}
