import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneRecipePageRoutingModule } from './one-recipe-routing.module';

import { OneRecipePage } from './one-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneRecipePageRoutingModule
  ],
  declarations: [OneRecipePage]
})
export class OneRecipePageModule {}
