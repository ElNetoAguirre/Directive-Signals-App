import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignalsRoutingModule } from "./signals-routing.module";
import { CounterPageComponent } from "./pages/counter-page/counter-page.component";
import { PropertiesPageComponent } from "./pages/properties-page/properties-page.component";
import { SignalsLayoutComponent } from "./layout/signals-layout/signals-layout.component";
import { UserInfoPageComponent } from "./pages/user-info-page/user-info-page.component";
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    CounterPageComponent,
    PropertiesPageComponent,
    SignalsLayoutComponent,
    UserInfoPageComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
  ]
})

export class SignalsModule { }
