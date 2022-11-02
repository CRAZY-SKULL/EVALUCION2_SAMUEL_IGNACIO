import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'segundapagina',
    loadChildren: () => import('./segundapagina/segundapagina.module').then( m => m.SegundapaginaPageModule)
  },
  {
    path: 'tercerapagina',
    loadChildren: () => import('./tercerapagina/tercerapagina.module').then( m => m.TercerapaginaPageModule)
  },
  {
    path: 'cuartapagina',
    loadChildren: () => import('./cuartapagina/cuartapagina.module').then( m => m.CuartapaginaPageModule)
  },
  {
    path: 'regristro',
    loadChildren: () => import('./regristro/regristro.module').then( m => m.RegristroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
