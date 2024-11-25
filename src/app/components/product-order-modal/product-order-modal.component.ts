import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../interfaces/Products';
import { ProductsOrder } from '../../interfaces/Orders/ProductOrder';
import { AddonsOrder } from '../../interfaces/Orders/AddonsOrder';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-order-modal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-order-modal.component.html',
  styleUrl: './product-order-modal.component.scss'
})
export class ProductOrderModalComponent {
  @Input() productSelected: Products | null = null;
  @Output() save = new EventEmitter<ProductsOrder>();
  @Output() cancel = new EventEmitter<void>();

  public quantity: number = 1;
  public addons: AddonsOrder[] = []; // Opcional: Implementar si hay addons disponibles

  // Guardar el producto
  public confirmSave(): void {
    if (this.productSelected) {
      const orderP: ProductsOrder = {
        product_id: this.productSelected.product_id,
        name: this.productSelected.name,
        description: this.productSelected.description,
        img_url: this.productSelected.img_url,
        category_id: this.productSelected.category_id,
        price: this.productSelected.price,
        quantity: this.quantity,
        addons: this.addons,
      };
      this.save.emit(orderP);
    }
  }

  // Cerrar el modal sin guardar
  public close(): void {
    this.cancel.emit();
  }

  // Incrementar cantidad
  public incrementQuantity(): void {
    this.quantity++;
  }

  // Decrementar cantidad
  public decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
