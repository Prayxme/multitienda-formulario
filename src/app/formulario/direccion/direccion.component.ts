import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-direccion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css',
})
export class DireccionComponent {
  @Input() estados: string[] = []; // Cambia el tipo según tu implementación
  @Input() codigos: string[] = []; // Cambia el tipo según tu implementación

  constructor(public formGroupDirective: FormGroupDirective) {}

  get form(): FormGroup {
    return this.formGroupDirective.control;
  }
}