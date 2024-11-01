import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from '../../models/carrito';
import { CarritoService } from '../../services/carrito.service';
import { initFlowbite } from 'flowbite';
import { NavigationEnd, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarritoListarComponent } from '../pay/carrito-listar.component';
import { ChangeDetectorRef } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CommonModule,
    FormsModule,
    CarritoListarComponent,
    CartComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public isOpen: boolean = false;
  public isOpenCart: boolean = false;
  public cantProduct: number = 1;

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  public toggleCart(): void {
    this.isOpenCart = !this.isOpenCart;
  }

  @HostListener('document:click', ['$event'])
  public onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const isInsideButton = target.closest('button')?.contains(target);
    const isInsideDropdown = target.closest('.relative')?.contains(target);

    if (!isInsideButton && !isInsideDropdown) {
      this.isOpen = false;
      this.isOpenCart = false;
    }
  }

  //Logica del carrito en el navbar o header
  @Input() mostrar: boolean = true;
  public carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];

  constructor(public router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    initFlowbite();
    this.getListCarrito();

    this.carritoService.getObservableCarrito().subscribe((carrito) => {
      this.listCarrito = carrito; // Se actualiza automáticamente con cada cambio en el carrito
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrar = event.url !== '/carrito';
        console.log('Navegando a:', event.url, this.mostrar);
        this.cdr.detectChanges(); // Fuerza la detección de cambios
      }
    });
  }

  getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
    // Emite la lista actualizada del carrito, Al inicio de la pagina se obtiene el listado MUY IMPORTANTE!
    this.carritoService['carritoSubject'].next(this.listCarrito);
  }

  eliminarItem(index: number) {
    this.carritoService.eliminar(index);
    this.getListCarrito();
  }

  actualizar(item: Carrito, index: number) {
    this.carritoService.actualizar(index, item.cantidad);
  }

  onKeyDown(event: any) {
    event.preventDefault();
  }

  item = { cantidad: 1 };

  incrementar(item: Carrito, index: number) {
    item.cantidad += 1;
    this.actualizar(item, index);
  }

  decrementar(item: Carrito, index: number) {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
      this.actualizar(item, index);
    }
  }
}
