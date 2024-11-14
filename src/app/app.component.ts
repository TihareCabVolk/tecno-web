import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogoComponent, CarritoListarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_tecno_Web';
}

