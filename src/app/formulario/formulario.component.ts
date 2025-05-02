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
  colecciones = [
    'Colección 1',
    'Colección 2',
    'Colección 3',
    'Colección 4',
    'Colección 5',
    'Colección 6',
    'Colección 7'
  ];
  


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
      selfieFile: [null],
      rifFile: [null],
      estado: ['', Validators.required],
      ciudad: ['', [Validators.required, Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/)]],
      sector: ['', [Validators.required, Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/)]],
      direccion: ['', Validators.required],
      codigo1: ['', Validators.required],
      telefono1: ['', [Validators.required, Validators.pattern(/^\d{7}$/)]],
      codigo2: [''],
      telefono2: ['', Validators.pattern(/^\d{7}$/)],
      servicioFile: [null],
      vendedor: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      rolHogar: ['', Validators.required],
      personas: ['', Validators.required],
      vivienda: ['', Validators.required],
      nivel: ['', Validators.required],
      ingreso: ['', Validators.required],
      ventas: ['', Validators.required],
      coleccionesInteresado: [[], Validators.required],
      recomendadoPor: [''],
      plataforma: ['', Validators.required],
    });
  }

  filePreviews: { [key: string]: string | null } = {
    cedulaFile: null,
    selfieFile: null,
    rifFile: null,
    servicioFile: null 

  };
  
  toggleColeccion(nombre: string) {
    const control = this.form.get('coleccionesInteresado');
    if (!control) return;
  
    const coleccionesSeleccionadas = control.value as string[];
  
    if (coleccionesSeleccionadas.includes(nombre)) {
      control.setValue(coleccionesSeleccionadas.filter(c => c !== nombre));
    } else {
      control.setValue([...coleccionesSeleccionadas, nombre]);
    }
  
    control.markAsTouched();
  }
  

  removeFile(field: string) {
    this.form.get(field)?.reset();
    this.filePreviews[field] = null;
  }

  
  onFileChange(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
  
    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      const maxSize = 5 * 1024 * 1024; // 5 MB
  
      const control = this.form.get(field);
      if (!control) return;
  
      control.markAsTouched(); // Asegura que se muestre la validación
  
      // Validar tipo
      if (!validTypes.includes(file.type)) {
        control.setErrors({ invalidType: true });
        this.filePreviews[field] = null;
        return;
      }
  
      // Validar tamaño
      if (file.size > maxSize) {
        control.setErrors({ maxSizeExceeded: true });
        this.filePreviews[field] = null;
        return;
      }
  
      control.setValue(file);
      control.setErrors(null); // Limpia errores anteriores
  
      // Vista previa
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.filePreviews[field] = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else if (file.type === 'application/pdf') {
        this.filePreviews[field] = 'pdf';
      } else {
        this.filePreviews[field] = null;
      }
    }
  }
  
  
  enviarFormulario() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.warn('Formulario inválido');
      return;
    }
  
    // Imprimir todos los datos en consola (visualización)
    const rawData = { ...this.form.value };
    console.log('📝 Datos captados del formulario:', rawData);
  
    const formData = new FormData();
    Object.entries(this.form.value).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value, value.name);
      } else {
        formData.append(key, typeof value === 'object' && !(value instanceof File) ? JSON.stringify(value) : value?.toString() || '');
      }
    });
  
    // Aquí iría la petición HTTP (cuando decidas activarla)
    /*
    const url_script = 'http://localhost:3000/api/formulario';
    this.http.post(url_script, formData).subscribe({
      next: () => alert('Formulario enviado con éxito'),
      error: () => alert('Error al enviar el formulario')
    });
    */
  }
    

}
