import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { TaxNotes } from './components/tax-notes/tax-notes';
import { NotFound } from './components/not-found/not-found';
import { Products } from './components/products/products';
import { TaxNoteDetails } from './components/tax-note-details/tax-note-details';
import { TaxNoteForm } from './components/tax-note-form/tax-note-form';
import { ProductForm } from './components/product-form/product-form';

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
        path: "produtos",
        component: Products
    },
    {
        path: "notas-fiscais/:id",
        component: TaxNoteDetails
    },
    {
        path: "criar-nota-fiscal",
        component: TaxNoteForm
    },
    {
        path: "criar-produto",
        component: ProductForm
    },
    {
        path: "**",
        component: NotFound
    }
];
