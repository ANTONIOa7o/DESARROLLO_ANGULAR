import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
Comunicaciones Generales, para las conexiones http
1º HttpClienteModule
*/
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
/*
Importacion del servicio Creado ⇓
*/
import { PokemonService } from './servicio/pokemon.service';


/*
Libreria para los formularios e interconexion de datos con los input
*/
import { FormsModule } from '@angular/forms';

/*
Importacion de firebase
*/
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  /*
  Declaracion de los servicios ⇓
  */
  providers: [PokemonService,AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
