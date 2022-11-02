import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercerapaginaPageRoutingModule } from './tercerapagina-routing.module';

import { TercerapaginaPage } from './tercerapagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercerapaginaPageRoutingModule
  ],
  declarations: [TercerapaginaPage]
})
export class TercerapaginaPageModule {}
