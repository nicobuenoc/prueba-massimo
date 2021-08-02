import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsComponent } from './ships.component';
import { ShipsDetailsComponent } from './components/ships-details/ships-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShipsRoutingModule } from './ships-routing.module';

@NgModule({
  imports: [CommonModule, NgxPaginationModule, ShipsRoutingModule],
  declarations: [ShipsComponent, ShipsDetailsComponent],
  providers: []
})
export class ShipsModule {}
