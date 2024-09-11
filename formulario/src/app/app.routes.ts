import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormTableComponent } from './form-table/form-table.component';
import { FormViewComponent } from './form-view/form-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'form-table', component: FormTableComponent },
  { path: 'form-view', component: FormViewComponent }
];
