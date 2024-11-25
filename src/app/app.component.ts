import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';
import { PedidoPersoComponent } from './components/pedido-perso/pedido-perso.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogoComponent, CarritoListarComponent, PedidoPersoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_tecno_Web';
}

