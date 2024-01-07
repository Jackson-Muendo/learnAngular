import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Num1Component } from './num1/num1.component';
import { Num2Component } from './num2/num2.component';
import { Num3Component } from './num3/num3.component';
import { Num4Component } from './num4/num4.component';
import { Num5Component } from './num5/num5.component';
import { Num6Component } from './num6/num6.component';
import { Num7Component } from './num7/num7.component';
import { Num8Component } from './num8/num8.component';
import { Num9Component } from './num9/num9.component';
import { Num10Component } from './num10/num10.component';
import { RoutesComponent } from './routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    Num1Component,
    Num2Component,
    Num3Component,
    Num4Component,
    Num5Component,
    Num6Component,
    Num7Component,
    Num8Component,
    Num9Component,
    Num10Component,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
