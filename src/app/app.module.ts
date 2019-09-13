import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoaComponent } from './grupoa/grupoa.component';
import { GrupobComponent } from './grupob/grupob.component';
import { GrupoaRoutingModule } from './grupoa/grupoa-routing.module';
import { GrupobRoutingModule } from './grupob/grupob-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GrupoaComponent,
    GrupobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
