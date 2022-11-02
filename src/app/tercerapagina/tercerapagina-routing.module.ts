import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercerapaginaPage } from './tercerapagina.page';

const routes: Routes = [
  {
    path: '',
    component: TercerapaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercerapaginaPageRoutingModule {}
