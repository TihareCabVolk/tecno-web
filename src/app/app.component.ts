import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { Carrito } from './models/carrito';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';
import { CartComponent } from './components/cart/cart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, CarritoListarComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Muestra';
}
