import { Routes } from '@angular/router';
import { AuthComponent } from './page/auth/auth.component';
import { HomeComponent } from './page/home/home.component';
import { authGuard } from './guards/auth.guard';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CouponsComponent } from './components/coupons/coupons.component';

export const routes: Routes = [
  { path: 'login', component: AuthComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carrito', component: CarritoListarComponent },
  { path: 'cupones', component: CouponsComponent },
];
