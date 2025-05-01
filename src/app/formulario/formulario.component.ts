import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { CommonModule, NgFor } from '@angular/common';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { DireccionComponent } from './direccion/direccion.component';
import { InformacionAdicionalComponent } from './informacion-adicional/informacion-adicional.component';
import { ExtrasComponent } from './extras/extras.component';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    DatosPersonalesComponent, 
    DocumentosComponent, 
    DireccionComponent, 
    InformacionAdicionalComponent, 
    ExtrasComponent,
    HeaderComponent
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  estados = ['Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Distrito Capital', 'Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'La Guaira', 'Yaracuy', 'Zulia'];
  codigos = ['0412', '0414', '0416', '0424', '0426']; 
  nivelesAcademicos = ['Primaria', 'Secundaria sin terminar', 'Bachiller', 'Universitario'];
  ingresos = ['0$ - 50$', '50$ - 100$', '100$ - 200$', 'Más de 200$'];


  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.form = this.fb.group({
      primerNombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/)]],
      segundoNombre: ['', [Validators.pattern(/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]*$/)]],
      primerApellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/)]],
      segundoApellido: ['', [Validators.pattern(/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]*$/)]],
      cedula: ['', [Validators.required, Validators.pattern(/^\d{6,8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      cedulaFile: [null, Validators.required],
      selfieFile: [null, Validators.required],
      rifFile: [null, Validators.required],
      estado: ['', Validators.required],
      ciudad: ['', Validators.required],
      sector: ['', Validators.required],
      direccion: ['', Validators.required],
      codigo1: ['', Validators.required],
      telefono1: ['', Validators.required],
      codigo2: [''],
      telefono2: [''],
      servicioFile: [null],
      vendedor: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      rolHogar: ['', Validators.required],
      personas: ['', Validators.required],
      vivienda: ['', Validators.required],
      nivel: ['', Validators.required],
      ingreso: ['', Validators.required],
      ventas: ['', Validators.required],
      recomendadoPor: [''],
      plataforma: ['', Validators.required],
    });
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.form.get(field)?.setValue(file);
    }
  }

  enviarFormulario(){
    if(this.form.invalid) return;

    const formData = new FormData();
    Object.entries(this.form.value).forEach(([key, value]) => {
      if(value instanceof File) {
        formData.append(key, value, value.name);
      }else {
        formData.append(key, typeof value === 'object' && !(value instanceof File) ? JSON.stringify(value) : value?.toString() || '');
      }

      const url_script = 'http://localhost:3000/api/formulario';

    this.http.post(url_script, formData).subscribe({
      next:() => alert('Formulario enviado con éxito'),
      error: () => alert('Error al enviar el formulario')
    });
      
    })
  }
}
