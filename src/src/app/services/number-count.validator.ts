import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validador para verificar la cantidad de números
export function numberCountValidator(expectedCount: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value && typeof control.value === 'string') {
            // Eliminar los espacios y contar solo los números
            const numbers = control.value.replace(/\D/g, ''); // Reemplaza cualquier no número por vacío
            return numbers.length === expectedCount ? null : { invalidNumberCount: true };
        }
        return null;
    };
}