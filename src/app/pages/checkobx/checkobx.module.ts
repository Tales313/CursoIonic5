import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckobxPageRoutingModule } from './checkobx-routing.module';

import { CheckobxPage } from './checkobx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckobxPageRoutingModule
  ],
  declarations: [CheckobxPage]
})
export class CheckobxPageModule {}
