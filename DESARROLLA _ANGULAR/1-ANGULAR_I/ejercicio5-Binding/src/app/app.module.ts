import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
Importaciones de recursos general, que puede acceder todos los componentes
Suelen ser principalmente recursos que son necesarios por su complejidad
en ejecucion o conexiones o acceder a otras librerias. Asi pues accedemos 
a un conjunto de directivas que nos nutren de recursos (librerias)
Como ejemplo para poder utilizar las estructuras de los formularios,necesitamos
importar una libreria especifica: 
            FormsModule ↆ
*/
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
