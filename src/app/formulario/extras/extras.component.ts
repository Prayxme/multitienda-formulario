import { NgIf, CommonModule } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-extras',
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css',

})
export class ExtrasComponent {
  @Input() form!: FormGroup;

  plataformas: string[] = [
    'Web',
    'Instagram',
    'Facebook',
    'YouTube',
    'TikTok',
    'Publicidad móvil',
    'Radio',
    'Televisión'
  ];
}
