import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validador para asegurarse de que solo se ingresen letras y espacios
export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Expresión regular que permite solo letras y espacios
    const regex = /^[a-zA-Z\s]*$/;

    // Si el valor no coincide con la expresión regular, se devuelve el error
    if (value && !regex.test(value)) {
      return { invalidName: true };  // Error personalizado
    }
    return null;  // No hay error si el valor es válido
  };
}