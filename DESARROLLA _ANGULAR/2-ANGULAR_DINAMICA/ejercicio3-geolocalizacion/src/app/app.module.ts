import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
Importamos la libreria principal de Angular Google Map
*/
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    AgmCoreModule.forRoot({
      apiKey:''
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
