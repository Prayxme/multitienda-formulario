import { Component, Input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NgFor, NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion-adicional',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './informacion-adicional.component.html',
  styleUrl: './informacion-adicional.component.css',

})
export class InformacionAdicionalComponent {
  @Input() form!: FormGroup;
  @Input() niveles: string[] = [];
  @Input() ingresos: string[] = [];
  @Input() onFileChange!: (event: any, field: string) => void;
  @Input() filePreviews!: { [key: string]: string | null };


  handleServicioFile(event: Event) {
    this.form.get('servicioFile')?.markAsTouched();
    this.onFileChange(event, 'servicioFile');
  }
  

}
