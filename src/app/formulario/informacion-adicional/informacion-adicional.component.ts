import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-informacion-adicional',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './informacion-adicional.component.html',
  styleUrl: './informacion-adicional.component.css',
  viewProviders: [FormGroupDirective]

})
export class InformacionAdicionalComponent {
  @Input() niveles: string[] = [];
  @Input() ingresos: string[] = [];

  constructor(public formGroupDirective: FormGroupDirective) {}

  get form() {
    return this.formGroupDirective.control;
  }
}
