import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
@Component({
  selector: 'app-pedidos',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class MisPedidosComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    this.pedidosService.getPedidos().subscribe({
      next: (data) => (this.pedidos = data),
      error: (err) => console.error('Error fetching pedidos', err),
    });
  }
}
