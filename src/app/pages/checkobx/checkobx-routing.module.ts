import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckobxPage } from './checkobx.page';

const routes: Routes = [
  {
    path: '',
    component: CheckobxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckobxPageRoutingModule {}
