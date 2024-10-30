import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CarrritoCompraComponent } from './carrito-compra/carrrito-compra.component';
import { HeaderComponent } from "./header/header.component";
import { CarritoListarComponent } from "./carrito-listar/carrito-listar.component";
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CarrritoCompraComponent, HeaderComponent, RouterLink, CarritoListarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'tecno-web';
  ngOnInit(): void {
    initFlowbite();
  }
}

