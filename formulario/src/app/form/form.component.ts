import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup;
  private static dataStore: any[] = []; // Armazenamento estático para os dados

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      FormComponent.dataStore.push({
        ...this.form.value,
        id: Date.now() // Adiciona um ID único
      });
      this.router.navigate(['/table']); // Navega para a página da tabela
      this.form.reset(); // Limpa o formulário
    }
  }

  static getData() {
    return FormComponent.dataStore;
  }
}
