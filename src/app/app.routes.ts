import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent }
];
