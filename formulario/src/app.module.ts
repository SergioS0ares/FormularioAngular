import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from ''
import { FormComponent } from 'form';
import { FormTableComponent } from './form-table.component';
import { FormViewComponent } from './form-view.component';

// Defina as rotas da aplicação
const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'table', component: FormTableComponent },
  { path: 'view/:id', component: FormViewComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormTableComponent,
    FormViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
