import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPagesPage } from './test-pages.page';

const routes: Routes = [
  {
    path: '',
    component: TestPagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPagesPageRoutingModule {}
