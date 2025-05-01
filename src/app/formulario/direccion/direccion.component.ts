import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-direccion',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css',
  viewProviders: [FormGroupDirective],
})
export class DireccionComponent {
  @Input() estados: string[] = []; // Cambia el tipo según tu implementación
  @Input() codigos: string[] = []; // Cambia el tipo según tu implementación

  constructor(public formGroupDirective: FormGroupDirective) {}

  get form() {
    return this.formGroupDirective.control;
  }
}