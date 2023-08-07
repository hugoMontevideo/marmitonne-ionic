import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeFormPageRoutingModule } from './recipe-form-routing.module';

import { RecipeFormPage } from './recipe-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeFormPageRoutingModule
  ],
  declarations: [RecipeFormPage]
})
export class RecipeFormPageModule {}
