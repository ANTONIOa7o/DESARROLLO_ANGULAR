
import { Component } from '@angular/core';

/**    /-----COMPONENTES-----\
 * 

    Un módulo consta de uno o mas componentes, dicha estructura tendrá una
    entidad propia y la composicion de sus componentes (podrán estar compuesto
      por otros componentes a su vez).
      En definitiva los componentes no serán mas que una percepción propia y 
      su complijidad y su profundida así como su reutilizacion serán su
      mayor baluarte

      app.componente.ts
      Será el componente de configuracion de variables y objetos principal
      Se define evidentemente la clase del componente, que permite exportarlo al
      modulo
      Este componente se define en dos estructuras
/*
a). @ Component: Palabra reservada para la declaracion de componentes.
      Va a constar de 3 elementos(con su valores) principales:
      a1: selector: El puntero o indicador de donde se va a mostrar el componente
      a2: templateUrl: El conjunto de estructuras visuales que estan definidas dentro
      del html
      a3. styleurls: Los estilos que estan definidos en el template
*/
@Component({
  selector: 'app-root',//Donde
  templateUrl: './app.component.html',//Que
  styleUrls: ['./app.component.css']//Cómo
})
/*
b) export class AppComponent
Serán en la acotacion del ambito de la clase donde surgiran o se desarrollaran declaraciones
de variables, propiedades del objeto, constructores y metodos
-export- traslada y define el objeto al app.module.ts
*/
export class AppComponent {
title = 'Mi primer ejercicio';
titulo2:string='Curso CfC';
titulo3:number


}
