import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuestraComponent } from './components/muestra/muestra.component';
import { TestComponent } from './components/test/test.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { Carrito } from './models/carrito';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';
import { CartComponent } from './components/cart/cart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MuestraComponent,
    TestComponent,
    CatalogoComponent,
    CarritoListarComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Muestra';
}
