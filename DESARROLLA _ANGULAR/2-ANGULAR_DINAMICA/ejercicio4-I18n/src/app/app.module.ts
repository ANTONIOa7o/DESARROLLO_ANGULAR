import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/*
Comunicaciones: ⇓
1. Comunicaciones Generales
  - HttpClientModule
  - HttpClient
2.Comunicacion y Traduccion
  - TranslateModule
  - TranslateLoader
*/


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
