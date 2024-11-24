import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  public isLoggedIn: boolean = false;
  public user!:User;

  public isOpen: boolean = false;
  public isOpenCart: boolean = false;
  public cantProduct: number = 1;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Suscribirse al estado de autenticación para mantener actualizado el navbar
    this.auth.isAuthenticated().subscribe((data: boolean) => {
      this.isLoggedIn = data;
    });
    if (typeof window !== 'undefined') {
      this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    }
  }

  /**
   * Navegar al login
   */
  public access(): void {
    this.router.navigate(['/login']);
  }

  /**
   * Cerrar sesión y redirigir al login
   */
  public logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  /**
   * Alternar el menú desplegable
   */
  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  /**
   * Alternar el carrito de compras
   */
  public toggleCart(): void {
    this.isOpenCart = !this.isOpenCart;
  }

  /**
   * Cerrar menús si se hace clic fuera del elemento
   */
  @HostListener('document:click', ['$event'])
  public onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    const isInsideButton = target.closest('button')?.contains(target);
    const isInsideDropdown = target.closest('.relative')?.contains(target);

    if (!isInsideButton && !isInsideDropdown) {
      this.isOpen = false;
      this.isOpenCart = false;
    }
  }
}
