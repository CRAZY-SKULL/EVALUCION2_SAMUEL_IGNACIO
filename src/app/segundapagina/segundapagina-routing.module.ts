import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundapaginaPage } from './segundapagina.page';

const routes: Routes = [
  {
    path: '',
    component: SegundapaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundapaginaPageRoutingModule {}
