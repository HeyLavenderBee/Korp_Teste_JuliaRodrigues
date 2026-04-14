import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TaxNotes } from './components/tax-notes/tax-notes';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        path: "",
        component: Home
    }, 
    {
        path: "home",
        component: Home
    },
    {
        path: "notas-fiscais",
        component: TaxNotes
    },
    {
        path: "**",
        component: NotFound
    }
];
