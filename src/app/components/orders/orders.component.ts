import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/orders.service'; // Importa el servicio
import { Orden } from '../../models/orden'; // Importa el modelo de orden
import { CommonModule } from '@angular/common';
import { Arigameplays } from '../../services/OrdersBS.service';
import { Product } from '../../models/Products';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public ordenes: Orden[] = []; // Lista de órdenes

  constructor(
    private ordenesService: OrdenesService,
    public ordeesValdivia: Arigameplays
  ) {}

  ngOnInit(): void {
    this.getOrdersDB();
  }

  public getOrders(): void {
    this.ordenes = this.ordenesService.getOrdenes();
  }

  //Obtener cupones
  private getOrdersDB(): void {
    this.ordeesValdivia.getAllOrders().subscribe({
      next: (data: Orden[]) => {
        console.log('Ordenes obtenidos:', data);
        this.ordenes = data;
      },
      error: (err: { message: any }) => {
        console.error('Error al obtener los ordenes:', err.message);
      },
    });

    console.log(this.ordenes);
  }

  public productos: Product[] = [];
  expandedOrderId: number | null = null; // Almacena el order_id de la orden expandida
  toggleDetalles(order_id: number) {
    if (this.expandedOrderId === order_id) {
      // Si la orden que se está seleccionando ya está expandida, la contraemos
      this.expandedOrderId = null;
    } else {
      // Si no, expandimos esta orden
      this.expandedOrderId = order_id;
    }

    this.ordeesValdivia.getAllProductsOrder(order_id).subscribe({
      next: (data: Product[]) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error:', err.message);
      },
    });
  }
}
