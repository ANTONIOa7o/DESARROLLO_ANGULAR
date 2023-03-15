import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Componente1Component } from './componentesGlobales/componente1/componente1.component';
import { Componente2Component } from './componentesGlobales/componente2/componente2.component';
import { Componente3Component } from './componentesGlobales/componente3/componente3.component';
/*
Integracion de un componente, servicio, .... AngularWorld(componente  secundario)
su importacion y posterior declaracion
*/
import { SecundarioComponent } from './secundario/secundario.component';

/*
CONFIGURACION DE RUTAS

I] Partiendo de la idea de su constructo en cuanto al comportamiento de lectura de elemento, tambien
las rutas tendrán esta estructura, Array
II] Requisitos necesarios para configura las rutas:
1-.Routes
  Ofrecerá las HERRAMIENTAS necesarias para las rutas; Establece todas las directivas que permiten
  implantar las rutas(la navegacion) en nuestra aplicacion. 
  En otras principales enviar y recibir parámetros[Params]
2.-RouterModule
  Generará la comunicacion en propio componente, asignará ruta. Definiremos dos elementos:
    a)const nombreRutas:
    b) linea de la ruta, definida por el parámetro path
    
                    NOS CREAMOS LAS RUTAS(Array)                          
                                 ⇓
*/
const misRutas: Routes =[
{path:'inicio',component:InicioComponent},
{path:'',component:Componente1Component},
{path:'c2',component:Componente2Component},
{path:'c3/:alpha',component:Componente3Component}, // Parámetro para configura rutas (generando el parámetro)
{path:'',redirectTo:'inicio',pathMatch:'full'},//Herramientas de configurar pagina principal
{path:'**',component:ErrorComponent}//La ruta de error ,Por lectura de rutas, poner al final.

];

/*
III] Importaciones de las librerias
    Las librerias que hemos comentado están dentro @angular/router
                          ⇓
*/
import { Routes,RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    SecundarioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
