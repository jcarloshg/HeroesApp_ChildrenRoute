import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'editar/:id',
        component: AgregarComponent,
      },
      {
        path: ':id',
        component: HeroeComponent,
      },
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: '**',
        redirectTo: 'listado',
        // component: LoginComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class HeroesRoutingModule { }
