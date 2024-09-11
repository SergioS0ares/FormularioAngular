import { Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { FormTableComponent } from './form-table.component';
import { FormViewComponent } from './form-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'table', component: FormTableComponent },
  { path: 'view/:id', component: FormViewComponent },
  { path: '**', redirectTo: 'form' }
];
