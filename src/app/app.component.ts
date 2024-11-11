import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_tecno_Web';
}
