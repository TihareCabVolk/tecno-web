import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class MisPedidosComponent implements OnInit {
  pedidos: any[] = []; // Aquí se almacenarán los pedidos
  pedidoSeleccionado: any = null; // Para manejar el modal

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    // Obtener los pedidos al inicializar el componente
    this.pedidosService.getPedidos().subscribe({
      next: (data) => {
        this.pedidos = data;
        console.log('Pedidos obtenidos:', this.pedidos);
      },
      error: (err) => console.error('Error al obtener los pedidos:', err),
    });
  }

  // Abrir el modal con un pedido seleccionado
  abrirModal(pedido: any): void {
    this.pedidoSeleccionado = pedido;
  }

  // Cerrar el modal
  cerrarModal(): void {
    this.pedidoSeleccionado = null;
  }
}

