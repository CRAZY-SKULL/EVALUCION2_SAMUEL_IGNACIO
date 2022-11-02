import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartapaginaPageRoutingModule } from './cuartapagina-routing.module';

import { CuartapaginaPage } from './cuartapagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartapaginaPageRoutingModule
  ],
  declarations: [CuartapaginaPage]
})
export class CuartapaginaPageModule {}
