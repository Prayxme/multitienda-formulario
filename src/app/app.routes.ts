import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component'; // Importa el componente del formulario

export const routes: Routes = [
    {
        path: '',
        component: FormularioComponent // Ruta raíz: muestra directamente el formulario
      }
];
