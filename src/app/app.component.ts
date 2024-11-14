import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_tecno_Web';
}

