import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRecipesPageRoutingModule } from './list-recipes-routing.module';

import { ListRecipesPage } from './list-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRecipesPageRoutingModule
  ],
  declarations: [ListRecipesPage]
})
export class ListRecipesPageModule {}
