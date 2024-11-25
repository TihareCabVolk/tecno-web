import { CommonModule } from '@angular/common';
import { Component, Output , EventEmitter} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Output() isActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>(); // Asegúrate de este formato
  public isActive: boolean = true;


  public primaryNav = [
    { link: '/admin/products', label: 'Gestionar Productos', icon: 'bx bxs-food-menu' },
    { link: '/admin/offers', label: 'Gestionar Ofertas', icon: 'bx bxs-purchase-tag-alt' },
  ];

  public user = {
    username:'',
    email:'',
    img_url:null,
    admin:0
  };
  
  constructor(private auth:AuthService, private router:Router){}

  ngOnInit(): void {
    // Obtener la información del usuario desde sessionStorage
    if (typeof window !== 'undefined') {
      const userData = sessionStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    }
  }

  public logout(): void {
    this.auth.logout();
    sessionStorage.removeItem('user'); // Limpia el almacenamiento de sesión
    this.router.navigate(['/login']);
  }

  toggle() {
    this.isActive = !this.isActive;
    this.isActiveChange.emit(this.isActive); // Emitimos el estado al componente padre
  }
}