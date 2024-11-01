import { Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

export const routes: Routes = [
    {path:'catalogo/:id', component:CatalogoComponent}
];
