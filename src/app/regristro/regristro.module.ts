import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegristroPageRoutingModule } from './regristro-routing.module';

import { RegristroPage } from './regristro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegristroPageRoutingModule
  ],
  declarations: [RegristroPage]
})
export class RegristroPageModule {}
