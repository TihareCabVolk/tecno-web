import { Routes } from '@angular/router';
import { CarritoListarComponent } from './components/pay/carrito-listar.component';
import { TestComponent } from './components/test/test.component';
import { ProfileComponent } from './page/profile/profile.component';
import { HomeComponent } from './page/home/home.component';
import { AuthComponent } from './page/auth/auth.component';
export const routes: Routes = [
  { path: 'carrito', component: CarritoListarComponent },
  { path: 'cupones', component: TestComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: AuthComponent },
  //Si ingresa una ruta incorrecta, redirige al inicio
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
