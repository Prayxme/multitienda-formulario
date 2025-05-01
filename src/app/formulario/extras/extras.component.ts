import { NgIf } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-extras',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css',
  viewProviders: [FormGroupDirective]

})
export class ExtrasComponent {
  @Input() onFileChange!: (event: any, field: string) => void;

  constructor(public formGroupDirective: FormGroupDirective) {}

  get form() {
    return this.formGroupDirective.control;
  }

}
