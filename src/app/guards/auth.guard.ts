import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    map(isLoggedIn => {
      if (isLoggedIn) {
        // Si el usuario está autenticado, redirigir a la página de inicio
        router.navigate(['/home']);
        return false;
      }
      // Si no está autenticado, permitir el acceso a la ruta
      return true;
    })
  );
};
