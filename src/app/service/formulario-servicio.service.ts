import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private apiUrl = 'http://localhost:3000/submit-form'; // URL de tu backend

  constructor(private http: HttpClient) { }

  // Enviar formulario al backend
  enviarFormulario(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  // Si quieres enviar los datos a las APIs de Google directamente, puedes crear métodos específicos
  // enviarDatosAGoogle(formData: any): Observable<any> {
  //   const googleApiUrl = 'https://your-google-api-endpoint.com'; // Aquí va la URL de tu endpoint de Google API
  //   return this.http.post(googleApiUrl, formData);
  // }
}
