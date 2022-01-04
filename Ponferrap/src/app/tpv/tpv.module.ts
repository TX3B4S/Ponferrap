import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpvPageRoutingModule } from './tpv-routing.module';

import { TpvPage } from './tpv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpvPageRoutingModule
  ],
  declarations: [TpvPage]
})
export class TpvPageModule {}
