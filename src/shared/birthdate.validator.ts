import { AbstractControl } from '@angular/forms';

export function ValidateBirthDate(control: AbstractControl) {
    var selected_date = new Date(control.value);
    var today = new Date()
  if (selected_date.getTime() > today.getTime()) {
    return { invalidBirthDate: true };
  }
    console.warn('ValidateBirthDate', control.value)
  return null;
}