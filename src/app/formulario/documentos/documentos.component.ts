import { NgIf } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css',
  viewProviders: [FormGroupDirective]

})
export class DocumentosComponent {
  @Input() form!: FormGroup;

  @Input() onFileChange!: (event: any, field: string) => void;
  @Input() filePreviews!: { [key: string]: string | null };
  @Input() removeFile!: (field: string) => void;

  @ViewChild('cedulaInput') cedulaInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('selfieInput') selfieInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('rifInput') rifInputRef!: ElementRef<HTMLInputElement>;

  reloadFile(field: string) {
    this.form.get(field)?.setValue(null);
    this.filePreviews[field] = null;
    // console.log('Limpiar el input file', field);
    // Limpiar el input file
    switch (field) {
      case 'cedulaFile':
        this.cedulaInputRef.nativeElement.value = '';
        break;
      case 'selfieFile':
        this.selfieInputRef.nativeElement.value = '';
        break;
      case 'rifFile':
        this.rifInputRef.nativeElement.value = '';
        break;
    }
  }

  eliminarArchivo(field: string) {
    this.removeFile(field);
    this.reloadFile(field);
  }

  // constructor(public formGroupDirective: FormGroupDirective) {}

  // get form() {
  //   return this.formGroupDirective.control;
  // }
}
