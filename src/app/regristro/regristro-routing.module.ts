import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegristroPage } from './regristro.page';

const routes: Routes = [
  {
    path: '',
    component: RegristroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegristroPageRoutingModule {}
