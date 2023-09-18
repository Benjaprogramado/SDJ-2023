import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './page/error/error.component';
import { LoginComponent } from './page/login/login.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'about', component:AboutComponent },
  { path: 'home', component:HomeComponent },
  {
    path: 'juegos',
    loadChildren: () => import('../app/page/juegos/juegos.module').then(m => m.JuegosModule)
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
