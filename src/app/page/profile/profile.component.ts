import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public username: string | null = null;
  public errorMessage: string = '';
  public selectedOption: string = 'perfil';
  public isModalOpen: boolean = false;
  public isCouponModalOpen: boolean = false;
  public showCode: boolean = false;
  public cupones: any[] = [];
  public selectedCoupon: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getCupones();
  }

  getCupones() {
    this.authService.getAllCupones().subscribe({
      next: (response: any) => {
        this.cupones = response;
        console.log('Cupones obtenidos:', this.cupones);
      },
      error: (error: Error) => {
        console.error('Error al obtener cupones:', error);
        this.errorMessage = 'Error al cargar los cupones';
      }
    });
  }

  getContent() {
    switch (this.selectedOption) {
      case 'perfil':
        return 'Contenido de Mi Perfil';
      case 'pedidos':
        return 'Contenido de Mis Pedidos';
      case 'cupones':
        return 'Contenido de Mis Cupones';
      default:
        return 'Contenido de Mi Perfil';
    }
  }

  profileOption(option: string) {
    this.selectedOption = option;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openCouponModal(cupon: any) {
    this.selectedCoupon = cupon;
    this.isCouponModalOpen = true;
    this.showCode = false;
  }

  closeCouponModal() {
    this.isCouponModalOpen = false;
    this.selectedCoupon = null;
  }

  toggleCode() {
    this.showCode = !this.showCode;
  }
}
