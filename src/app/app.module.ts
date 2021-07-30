import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './principal/principal.module';

// Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, PrincipalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, PrincipalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
