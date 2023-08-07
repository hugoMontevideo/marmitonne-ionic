import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonDetailPage } from './button-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonDetailPageRoutingModule {}
