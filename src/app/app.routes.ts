import { Routes } from '@angular/router';
import { CarrritoCompraComponent } from './carrito-compra/carrrito-compra.component';
import { HomeComponent } from './home/home.component';
import { CarritoListarComponent } from './carrito-listar/carrito-listar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'carrito-listar', component: CarritoListarComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }

];
