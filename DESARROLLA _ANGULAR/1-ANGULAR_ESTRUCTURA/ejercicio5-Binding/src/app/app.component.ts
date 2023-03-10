import { Component } from '@angular/core';
import Swal from 'sweetalert2';//Importacion de microservicio, solo utilizada en dicho componente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*1º Data Binding: Interpolation*/
  title = 'ejercicio5: Binding';
  nombre: string = 'Escribe tu nombre y apellidos';
  apellido: string = 'Cuadrado';
  edad: number = 22;

  /*
  2º Event Binding
  */
  saludar() {//Estamos declarando una función - metodo funcional-
    /*Estructuras de ejecucion alert()*/

    Swal.fire({
      title: 'Aparcion de nuestro primer microservicio con importacion.',
      text: 'Deseas continuar?',
      confirmButtonText: 'Continuar',
      confirmButtonColor: 'navy',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: 'url(https://www.aquariumcostadealmeria.com/wp-content/uploads/2018/02/fondo-arenoso-1.jpg)',
      backdrop: `
   
      url(https://www.anipedia.net/imagenes/gifs-animados-peces-1.gif)
      left top
      no-repeat
     
    `,
      footer: 'Continuará...',
      icon: 'question',


    })

  }

  /*3º Event Property Binding*/
  habilitado: boolean = true;

  //Crear un constructor para que permita trabajar la funcion que  su vez llame a una propiedad del
  //objteto
  constructor() {
    setTimeout(() => {this.habilitado= false; },   5000);
      
  }
  

  /*
  4º Two way data Binding
  */
  texto: string = 'Curso Angular I 2023';
  dni: string = 'Introduce dni'

/*
5º Event this Binding
*/

estilo ='rojo'//Clase voy a definir en css

}
