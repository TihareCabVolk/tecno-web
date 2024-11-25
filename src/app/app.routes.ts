import { Routes } from '@angular/router';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';


export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'carrito', component: CarritoListarComponent },
  { path: 'cupones', component: CouponsComponent },
  { path: 'orderview', component: OrdersComponent},
  //Si ingresa una ruta incorrecta, redirige al inicio
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
