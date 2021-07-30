import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { PageOneComponent } from '../components/page-one/page-one.component';
import { PageTwoComponent } from '../components/page-two/page-two.component';
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [PrincipalComponent, PageOneComponent, PageTwoComponent],
  imports: [CommonModule, PrincipalComponentsRoutingModule]
})
export class PrincipalModule {}
