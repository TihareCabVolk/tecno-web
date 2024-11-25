import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Coupon } from '../../interfaces/Coupon';
import { CarritoService } from '../../services/carrito.service';
import { WcdonaldsService } from '../../services/wcdonalds.service';
import { Order } from '../../interfaces/Orders/Order';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BtnTextProductComponent } from '../../components/btn-text-product/btn-text-product.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,FormsModule,NavbarComponent,BtnTextProductComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  public carrito: Order = { order_id: null, user_id: null, date: null, products: [], total_price: 0 }; // Inicializamos con un valor vacío.
  public coupon!: Coupon | null; // Cupón actual
  public coupons!: Coupon[]; // Lista de cupones
  public codeCoupon: string = ''; // Código ingresado por el usuario
  public discount: number = 0; // Descuento aplicado
  public final_price:number = 0;

  constructor(private carritoService: CarritoService, private wdService: WcdonaldsService) {}

  ngOnInit(): void {
    // Suscribirse al observable para sincronizar el carrito
    this.carritoService.getObservableCarrito().subscribe({
      next: (carrito) => {
        this.carrito = carrito;
        this.updateFinalPrice(); // Actualizar el precio final cuando se actualice el carrito
      },
      error: (err) => {
        console.error('Error al obtener el carrito:', err);
      },
    });

    // Obtener cupones desde el servicio
    this.wdService.getAllCupones().subscribe({
      next: (coupons) => {
        this.coupons = coupons;
      },
      error: (err) => {
        console.error('Error al obtener los cupones:', err);
      },
    });
  }

  // Aplicar o quitar cupón
  toggleCupon(): void {
    if (this.coupon) {
      // Si ya hay un cupón aplicado, lo quitamos
      this.coupon = null;
      this.discount = 0;
      this.updateFinalPrice();
    } else {
      // Buscar el cupón por código
      const foundCoupon = this.coupons.find((c) => c.codigo === this.codeCoupon);
      if (foundCoupon) {
        this.coupon = foundCoupon;
        this.discount = this.calculateDiscount(foundCoupon);
        this.updateFinalPrice();
      } else {
        alert('Cupón inválido');
      }
    }
  }

  // Calcular el descuento basado en el cupón
  calculateDiscount(coupon: Coupon): number {
    
    if (!coupon.descuento || !coupon) return 0;
    
    return (this.carrito.total_price * coupon.descuento) / 100;
  }

  // Actualizar el precio final del carrito
  updateFinalPrice(): void {
    const finalPrice = this.carrito.total_price - this.discount;
    this.final_price = finalPrice > 0 ? finalPrice : 0;
  }

  // Finalizar la compra
  finalizarCompra(): void {
    if (this.carrito.products.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    // Implementa la lógica de finalizar compra
    alert('Compra finalizada con éxito');
  }
  // Método para aumentar la cantidad de un producto
  public aumentarCantidad(index: number): void {
    const producto = this.carrito.products[index];
    this.carritoService.actualizar(index, producto.quantity + 1);
  }

  // Método para disminuir la cantidad de un producto
  public disminuirCantidad(index: number): void {
    const producto = this.carrito.products[index];
    if (producto.quantity > 1) {
      this.carritoService.actualizar(index, producto.quantity - 1);
    } else {
      this.eliminarProducto(index);
    }
  }

  // Método para eliminar un producto
  public eliminarProducto(index: number): void {
    this.carritoService.eliminar(index);
  }
}
