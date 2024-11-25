import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../interfaces/Products';
import { ProductOrderModalComponent } from "../product-order-modal/product-order-modal.component";
import { ProductsOrder } from '../../interfaces/Orders/ProductOrder';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductOrderModalComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent{
  @Input() products: Products[] = [];
  public showModal: boolean = false;
  public productSelected: Products | null = null;

  constructor(private carritoService: CarritoService) {}


  // Abrir el modal
  public toggleProduct(product: Products): void {
    this.productSelected = product;
    this.showModal = true;
  }

  // Manejar guardado del producto desde el modal
  public handleSave(product: ProductsOrder): void {
    if (product) {
      this.carritoService.agregar(product); // Agregar al carrito
      this.showModal = false;
    }
  }

  // Cerrar el modal sin guardar
  public handleCancel(): void {
    this.showModal = false;
  }    
}
