import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css'
})
export class DocumentosComponent {
  @Input() onFileChange!: (event: any, field: string) => void;
form: FormGroup<any> | undefined;

}
