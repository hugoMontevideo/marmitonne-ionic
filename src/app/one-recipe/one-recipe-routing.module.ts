import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneRecipePage } from './one-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: OneRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneRecipePageRoutingModule {}
