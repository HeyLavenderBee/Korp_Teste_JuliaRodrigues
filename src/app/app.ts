import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { TaxNotes } from './components/tax-notes/tax-notes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, TaxNotes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Korp_Teste_JuliaRodrigues');
}
