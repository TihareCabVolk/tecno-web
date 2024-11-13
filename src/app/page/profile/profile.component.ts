import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public email: string | null = 'Wonald@Donalds.wc';
  public username: string | null = 'Wonald Wc Donalds';
  public phone: string | null = '(+56) 9 1234 5678';
  public selectedOption: string = 'perfil';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Suscribirse al estado de autenticación
    this.authService.isAuthenticated().subscribe(authenticated => {
      if (authenticated) {
        this.router.navigate(['/login']); // Redirigir si no está logueado
      } else {
        // Obtener el email, nombre de usuario y teléfono del usuario

        /*
        this.email = this.authService.getEmail(); // Obtener el email
        this.username = this.authService.getUsername(); // Obtener el nombre de usuario
        this.phone = this.authService.getPhone(); // Obtener el teléfono
        */
       
      }
    });
  }

  profileOption(option: string) {
    this.selectedOption = option;
  }
  
  getContent() {
    switch (this.selectedOption) {
      case 'perfil':
        return 'Contenido de Mi Perfil.ts';
      case 'pedidos':
        return 'Contenido de Mis Pedidos.ts';
      case 'cupones':
        return 'Contenido de Mis Cupones.ts';
      default:
        return 'Contenido de Mi Perfil.ts';
    }
  }
}
