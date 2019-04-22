import { forwardRef } from "@angular/core";

export abstract class FormComponent {
  formPath: string;
}

export function provideFormComponent(component: any) {
  return { provide: FormComponent, useExisting: forwardRef(() => component) };
};