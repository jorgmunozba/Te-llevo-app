import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarviajePage } from './realizarviaje.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarviajePageRoutingModule {}
