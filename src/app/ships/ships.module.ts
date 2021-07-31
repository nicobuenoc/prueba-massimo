import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsComponent } from './ships.component';
import { ShipsDetailsComponent } from './components/ships-details/ships-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ShipsService } from './services/ships.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShipsRoutingModule } from './ships-routing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxPaginationModule, ShipsRoutingModule],
  declarations: [ShipsComponent, ShipsDetailsComponent],
  providers: [ShipsService]
})
export class ShipsModule {}
