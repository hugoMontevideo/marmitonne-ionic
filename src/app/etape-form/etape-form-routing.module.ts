import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtapeFormPage } from './etape-form.page';

const routes: Routes = [
  {
    path: '',
    component: EtapeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtapeFormPageRoutingModule {}
