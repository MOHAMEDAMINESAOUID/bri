import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipeComponent } from './principe/principe.component';
import { ServiceDComponent } from './service-d/service-d.component';
import { ServicePComponent } from './service-p/service-p.component';
import { ServiceTComponent } from './service-t/service-t.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PrincipalComponent,
    PrincipeComponent,
    ServiceDComponent,
    ServicePComponent,
    ServiceTComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
