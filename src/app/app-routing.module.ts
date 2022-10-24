import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrPageComponent } from './shared/err-page/err-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    // component: ErrPageComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'heroes',
    // component: ErrPageComponent,
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: ErrPageComponent,
  },
  {
    path: '**',
    // redirectTo: '404',
    component: ErrPageComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
