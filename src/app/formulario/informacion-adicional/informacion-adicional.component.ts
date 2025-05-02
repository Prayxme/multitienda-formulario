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
  @Input() colecciones: string[] = [];
  // @Input() toggleColeccion!: (nombre: string) => void;



  handleServicioFile(event: Event) {
    const fileInput = event.target as HTMLInputElement;
  if (fileInput?.files?.[0]) {
    // Aquí puedes procesar el archivo
    this.form.get('servicioFile')?.markAsTouched();
    this.onFileChange(event, 'servicioFile');
  }
  }
  

}
