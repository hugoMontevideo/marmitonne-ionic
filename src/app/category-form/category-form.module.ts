import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryFormPageRoutingModule } from './category-form-routing.module';

import { CategoryFormPage } from './category-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryFormPageRoutingModule
  ],
  declarations: [CategoryFormPage]
})
export class CategoryFormPageModule {}
