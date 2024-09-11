import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

// Componentes
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionar FormsModule
  ],
  bootstrap: [FormComponent]
})
export class AppConfig { }
