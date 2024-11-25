import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/orders.service'; // Importa el servicio
import { Orden } from '../../models/orden'; // Importa el modelo de orden
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordenes: Orden[] = []; // Lista de órdenes

  constructor(private ordenesService: OrdenesService) {}

  ngOnInit(): void {
    // Nos suscribimos al observable de órdenes para recibir actualizaciones
    //this.ordenesService.getObservableOrdenes().subscribe((ordenes) => {
    //  this.ordenes = ordenes; // Asignamos las órdenes al array
    //  console.log('Órdenes recibidas:', this.ordenes); // Depuración
    //});
    this.getOrders()
    
    const nuevaOrden = new Orden(
      1, // ID
      101, // Cliente
      201, // Producto
      2, // Cantidad
      19.98, // Total
      'en preparación', // Estado
      '2024-11-24' // Fecha
    );
  } 

  public getOrders(): void{
    this.ordenes = this.ordenesService.getOrdenes() 
  }
}
