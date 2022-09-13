import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPagesPageRoutingModule } from './test-pages-routing.module';

import { TestPagesPage } from './test-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPagesPageRoutingModule
  ],
  declarations: [TestPagesPage]
})
export class TestPagesPageModule {}
