
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: '**', component: HomeComponent} 
];