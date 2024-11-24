import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
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

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    const userId = 1;

    this.apiService.getUserById(userId).subscribe(
      (data) => {
        this.username = data.username;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
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

  openCouponModal() {
    this.isCouponModalOpen = true;
    this.showCode = false;
  }

  closeCouponModal() {
    this.isCouponModalOpen = false;
  }

  toggleCode() {
    this.showCode = !this.showCode;
  }
}
