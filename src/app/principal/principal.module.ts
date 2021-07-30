import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
// Components
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CommonModule, PrincipalComponentsRoutingModule]
})
export class PrincipalModule {}
