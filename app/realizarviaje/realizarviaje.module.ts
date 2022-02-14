import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarviajePageRoutingModule } from './realizarviaje-routing.module';

import { RealizarviajePage } from './realizarviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RealizarviajePageRoutingModule
  ],
  declarations: [RealizarviajePage]
})
export class RealizarviajePageModule {}
