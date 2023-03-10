/*
               MODULO/S
          Lo definiremos desde las caracteristicas y las categorias
        que lo configuran:
        i) Caracteristicas:
            i.1: La unidad de configuracion mas grande en la que se puede dividir 
            una aplicacion
            i.2:Su capacidad de reutilizacion: reciclaje y uso
            i.3: Conexion con otros modulos, asocioados que nos suelen ofrecer recursos
            añadidos o compentencias necesarias
              i.3.a.Nativas (Angular Material)
              i.3.b: Terceros 
                -free (HttpRequest, apis Browser....)
                -value ()
              i.3.c: Propias

*/
import { NgModule } from '@angular/core';//1
import { AppComponent } from './app.component';//2
import { BrowserModule } from '@angular/platform-browser';//3

/*
@NgModule, Palabra reservada para la declaracion de los modulos:
consta de ARRAYS(Matrices) 
1º declarations, sen han de pasar lista a la declaracion de todos los 
componentes. Esta declaración permite el acceso a su contenido
2º Importaciones: Librerias y recursos dentro de un modulo que necesito
para acceder a determinados recursos
3º providers: Servicios (login, BBDD)
4º bootstrap: Define el componente de inicio

*/

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//componente principal
})
export class AppModule { }

/*  ⇓
 carpeta assets
 -archivos de imagenes,...contenidos multimedia
 -archivos i18n
 -archivos de otros servicios

 
*/
/**/