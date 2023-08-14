import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path: '', component: HomeComponent},/*
  {path: '/perfil', component: PerfilComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
