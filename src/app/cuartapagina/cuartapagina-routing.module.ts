import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartapaginaPage } from './cuartapagina.page';

const routes: Routes = [
  {
    path: '',
    component: CuartapaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartapaginaPageRoutingModule {}
