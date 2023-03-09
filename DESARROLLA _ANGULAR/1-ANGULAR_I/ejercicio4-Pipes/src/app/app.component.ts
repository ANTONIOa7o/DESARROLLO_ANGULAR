import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio4: Pipes';
  /*
  Declaramos variables para establecer diversas salidas de Pipes
  */

  texto:string ='Bienvenidos a la 1º parte de Angular';

  numero:number=7788.654321;

  porcentaje:number=0.5488;

  fecha: Date = new Date();
  
  jsonObjeto ={nombre:'Francisco',edad:36,telefono:{telf1:918549800,telf2:957656587}};

}
