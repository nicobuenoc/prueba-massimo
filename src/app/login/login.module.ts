import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentsRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, LoginComponentsRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
