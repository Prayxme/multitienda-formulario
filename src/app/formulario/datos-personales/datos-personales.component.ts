import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './datos-personales.component.html'
})
export class DatosPersonalesComponent {
  @Input() form!: FormGroup;
}
