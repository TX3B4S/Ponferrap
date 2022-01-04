import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpvPage } from './tpv.page';

const routes: Routes = [
  {
    path: '',
    component: TpvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpvPageRoutingModule {}
