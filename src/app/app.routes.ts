import { Routes } from '@angular/router';
import { AuthComponent } from './page/auth/auth.component';
import { HomeComponent } from './page/home/home.component';
import { authGuard } from './guards/auth.guard';
import { CatalogoComponent } from './page/catalogo/catalogo.component';
import { AdminComponent } from './page/admin/admin.component';
import { ProductsComponent } from './components/admin/products/products.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent, // Usa tu layout principal
        children: [
          { path: 'products', component: ProductsComponent },
          { path: 'offers', component: CatalogoComponent },
          { path: 'coupons', component: CatalogoComponent },
          { path: 'statistics', component: CatalogoComponent },
        ],
      },
    {path:'catalogo/:category_id', component:CatalogoComponent},
    {path:'admin', component:AdminComponent},
    { path: 'login', component:  AuthComponent, canActivate:[authGuard]},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent}
];
