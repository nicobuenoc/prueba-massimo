import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { PageOneRoutingModule } from './page-one-routing.module';

@NgModule({
  imports: [CommonModule, PageOneRoutingModule],
  declarations: [PageOneComponent]
})
export class PageOneModule {}
