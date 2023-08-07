import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonDetailPageRoutingModule } from './button-detail-routing.module';

import { ButtonDetailPage } from './button-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonDetailPageRoutingModule
  ],
  declarations: [ButtonDetailPage]
})
export class ButtonDetailPageModule {}
