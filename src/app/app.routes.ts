import { Routes } from '@angular/router';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'carrito', component: CarritoListarComponent },
  { path: 'cupones', component: TestComponent },
  //Si ingresa una ruta incorrecta, redirige al inicio
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
