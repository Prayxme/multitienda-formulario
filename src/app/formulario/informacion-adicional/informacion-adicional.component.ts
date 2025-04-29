import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-informacion-adicional',
  imports: [ReactiveFormsModule],
  templateUrl: './informacion-adicional.component.html',
  styleUrl: './informacion-adicional.component.css',
  viewProviders: [FormGroupDirective]

})
export class InformacionAdicionalComponent {
  @Input() niveles: string[] = [];
  @Input() ingresos: string[] = [];
}
