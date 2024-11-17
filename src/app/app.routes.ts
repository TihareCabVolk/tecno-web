import { Routes } from '@angular/router';
import { AuthComponent } from './page/auth/auth.component';
import { HomeComponent } from './page/home/home.component';
import { authGuard } from './guards/auth.guard';
import { CatalogoComponent } from './page/catalogo/catalogo.component';

export const routes: Routes = [
    {path:'catalogo/:category_id', component:CatalogoComponent},
    { path: 'login', component:  AuthComponent, canActivate:[authGuard]},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent}
];
