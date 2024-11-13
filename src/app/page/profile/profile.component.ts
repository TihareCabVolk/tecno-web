import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public email: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Suscribirse al estado de autenticación
    this.authService.isAuthenticated().subscribe(authenticated => {
      if (authenticated) {
        this.router.navigate(['/login']); // Redirigir si no está logueado
      } else {
        // Obtener el email del usuario
        this.email = this.authService.getEmail(); // Obtener el email
      }
    });
  }
}
