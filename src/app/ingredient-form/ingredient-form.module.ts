import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientFormPageRoutingModule } from './ingredient-form-routing.module';

import { IngredientFormPage } from './ingredient-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientFormPageRoutingModule
  ],
  exports: [
    IngredientFormPage
  ],
  declarations: [IngredientFormPage]
})
export class IngredientFormPageModule {}
