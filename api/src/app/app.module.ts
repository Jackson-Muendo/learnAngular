import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataService} from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredictComponent } from './predict/predict.component';
import { PredictapiComponent } from './predictapi/predictapi.component';

@NgModule({
  declarations: [
    AppComponent,
    PredictComponent,
    PredictapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
