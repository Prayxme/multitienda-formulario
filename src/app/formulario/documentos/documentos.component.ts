import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css',
  viewProviders: [FormGroupDirective]

})
export class DocumentosComponent {
  @Input() onFileChange!: (event: any, field: string) => void;

  constructor(public formGroupDirective: FormGroupDirective) {}

  get form() {
    return this.formGroupDirective.control;
  }
}
