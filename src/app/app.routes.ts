import { Routes } from '@angular/router';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
  { path: 'carrito', component: CarritoListarComponent },
  { path: 'cupones', component: TestComponent },
  //Si ingresa una ruta incorrecta, redirige al inicio
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
