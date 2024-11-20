import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';


@Component({
  selector: 'app-view-order',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.scss'
})
export class ViewOrderComponent {

  constructor(private authService: AuthService, private router: Router) {}
  getEstadoClass(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'en preparación':
        return 'bg-red-500 text-white px-2 py-1 rounded';
      case 'en reparto':
        return 'bg-yellow-500 text-white px-2 py-1 rounded';
      case 'entregado':
        return 'bg-green-500 text-white px-2 py-1 rounded';
      default:
        return 'bg-gray-500 text-white px-2 py-1 rounded';
    }
  }
  
  

  
  
}
