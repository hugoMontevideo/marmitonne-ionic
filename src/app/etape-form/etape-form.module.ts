import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtapeFormPageRoutingModule } from './etape-form-routing.module';

import { EtapeFormPage } from './etape-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtapeFormPageRoutingModule
  ],
  declarations: [EtapeFormPage]
})
export class EtapeFormPageModule {}
