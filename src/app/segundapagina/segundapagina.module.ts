import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundapaginaPageRoutingModule } from './segundapagina-routing.module';

import { SegundapaginaPage } from './segundapagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundapaginaPageRoutingModule
  ],
  declarations: [SegundapaginaPage]
})
export class SegundapaginaPageModule {}
