import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-direccion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css',
  viewProviders: [FormGroupDirective],
})
export class DireccionComponent {
  @Input() form: any; // Cambia el tipo según tu implementación
  @Input() estados: string[] = []; // Cambia el tipo según tu implementación
  @Input() codigos: string[] = []; // Cambia el tipo según tu implementación

  constructor() { }

    
}
