import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRecipesPage } from './list-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: ListRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRecipesPageRoutingModule {}
