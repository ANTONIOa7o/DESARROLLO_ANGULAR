import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio3-Directivas';
  /*Declaracion de las variables*/

alumnos:any =[
{nombre:'Juan',apellido:'Lopez',nota:7.5, valoracion:'alta', repetidor:false},
{nombre:'Maria',apellido:'Castejon',nota:5.6, valoracion:'alta', repetidor:false},
{nombre:'Elena',apellido:'Sanchez',nota:3.3, valoracion:'baja', repetidor:true},
{nombre:'Roberto',apellido:'Eras',nota:6.4, valoracion:'media', repetidor:true},
{nombre:'Javier',apellido:'de La Morena',nota:4.1, valoracion:'media', repetidor:false},
{nombre:'Marta',apellido:'Griñon',nota:9.2, valoracion:'baja', repetidor:true},
];

/* En cuanto a la declaracion de las variables (punto 5)

TypeScript, aclaramos que  trata de la misma manera los array, las matrices, las colecciones
y la definicion queda reflejada de diversas maneras dependiendo de la tipacion de las variables

variables1:number[]
variables2:string[];
variables3:boolean=[true,false]
variables4:any[]=null
variables5:any[]=[{},{}]
*/

variables1:number[]=[1,8];
variables2:string[]=['maria','Juan'];
variables3:any=[]
}
