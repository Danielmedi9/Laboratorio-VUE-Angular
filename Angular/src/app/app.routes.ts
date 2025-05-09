import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './menu/menupriv/dashboard/dashboard.component';
import { ProfileComponent } from './menu/menupriv/profile/profile.component';
import { CrudComponent } from './menu/menupriv/crud/crud.component';
import { GaleriaComponent } from './menu/menupriv/galeria/galeria.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'profile', component: ProfileComponent },
];
