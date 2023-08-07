import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientFormPage } from './ingredient-form.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientFormPageRoutingModule {}
