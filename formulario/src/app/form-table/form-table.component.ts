import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss']
})
export class FormTableComponent implements OnInit {
  data: any[] = [];

  ngOnInit() {
    this.data = FormComponent.getData(); // Obtém os dados estáticos do FormComponent
  }
}
