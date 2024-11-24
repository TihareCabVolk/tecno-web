import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { Products } from '../../models/Products';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private carritoService = inject(CarritoService);

  constructor() {}

  @Input() products: Products[] = [];
  @Input() modo: string = '';

  public productoSeleccionado: number = 0;

  public ngOnInit(): void {}

  openCard(id: number): void {
    this.productoSeleccionado = id;
  }

  closeCard(): void {
    this.productoSeleccionado = 0;
  }

  agregarProducto(item: Products) {
    this.carritoService.agregar(item);
    this.closeCard(); // Cerrar el card flotante
  }
}
