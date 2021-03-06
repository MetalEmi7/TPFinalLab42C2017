import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLinkActive } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgmCoreModule } from "@agm/core";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AltaComponent } from './alta/alta.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListadoComponent } from './listado/listado.component';
import { ConfigMapDirective } from './directivas/config-map.directive';
import { MenuStripComponent } from './menu-strip/menu-strip.component';

import { MiHttpService } from "./servicios/mi-http.service";

const miRoute = [
  {path:"", component: MainMenuComponent},
  {path:"login", component: LoginComponent},
  {path:"listado", component: ListadoComponent},
  {path:"altaReservacion", component: ReservacionComponent},
  {path:"", component: MainMenuComponent},
  {path:"alta", component: AltaComponent},
  {path:"listado", component: ListadoComponent},
  {path:"altaReservacion", component: ReservacionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    AltaComponent,
    ReservacionComponent,
    CatalogoComponent,
    ListadoComponent,
    ConfigMapDirective,
    MenuStripComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(miRoute),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsvHVlxMgFvo8Wh_O0SfdlVKDaK5kBuBA'
    })
  ],
  providers: [
    MiHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
