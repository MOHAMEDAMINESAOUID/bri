import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "./login/login.component";
import {PrincipeComponent} from "./principe/principe.component";
import {SignupComponent} from "./signup/signup.component";
import {PrincipalComponent} from "./principal/principal.component";
import {ServicePComponent} from "./service-p/service-p.component";
import {ServiceTComponent} from "./service-t/service-t.component";
import {ServiceDComponent} from "./service-d/service-d.component";

let routes: Routes;
routes = [

  {path: "products", component: HeaderComponent},
  {path: "customers", component: FooterComponent},
  {path: "login", component: LoginComponent},
  {path: "principe", component: PrincipeComponent},
  {path: "", component: PrincipeComponent},
  {path: "signup", component: SignupComponent},
  {path: "principal", component: PrincipalComponent},

  {path: "service-p", component: ServicePComponent},
  {path: "service-t", component: ServiceTComponent},
  {path: "service-d", component: ServiceDComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
