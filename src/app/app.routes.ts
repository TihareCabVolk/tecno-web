import { Routes } from '@angular/router';
import { AuthComponent } from './page/auth/auth.component';
import { HomeComponent } from './page/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ProfileComponent } from './page/profile/profile.component';

export const routes: Routes = [
    { path: 'login', component:  AuthComponent, canActivate:[authGuard]},
    { path: '', redirectTo: 'login', pathMatch: 'full' },// con "*" sirve para cualquier otra ruta
    { path: 'home', component: HomeComponent},
    { path: 'profile', component: ProfileComponent, canActivate:[authGuard]},
        
];
