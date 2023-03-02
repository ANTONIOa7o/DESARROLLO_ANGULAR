/*
        ==================
              CLASES
        ==================


    Por la necesidad, ya de alcanzar la posibilidad de poder implementar
objetos que fueran a ser ulizados en nuestras aplicaciones.
Ganó rapidamente un gran interes daba esa ventaja tactica de la implementacion
de herencias, metodos dentro de las estructuras de nuestro codigo

Las clases, que ya ECM6 para implementar los objetos, js y ts.
TypeScript aprovecha esta coyuntura, 'desarrolla un superconjunto de javaScript que
añade tipados estáticos y objetos basados en esta configuracion de clase'

Conclusiones previas:

*las clases tendrán asignacion de palabras nombrandolas en Mayusculas y palabra reservada
class

**Sintaxis:

class Nombre {

    constructor(){

    }
    metodos(){

    }

}
ejemplo:

class Persona{

    constructor(atributos, habilidades, ...){
        
    }
        hablar(){

        }
    
    acciones(){
        this.hablar
    }
}

*/
var alumnos = [[1, 'Maria', 'de las Mercedes', 8.3], [2, 'Juan', 'Castejon', 4.8], [3, 'Pedro', 'Valdivia', 7.2]]

/*
A) ORTODOXA INSTANCIANDO PROPOIEDADES
*/

for (let i in alumnos) {
    let [id, nombre, apellido, nota] = alumnos[i]

    document.write(`datos del alumno: ${id}, nombre: ${nombre} y apellidos: ${apellido} y nota: ${nota} <br>`);
}

/*
B) INSTANCIANDO A CLASES
*/

class Alumno {
    //Caracteristicas del objeto
    //Propiedades
    //Variables Globales
    id;
    nombre;
    apellido;
    nota;

    /*b.1 Constructor
    esencialement su funcion será ayurdarnos a crear objetos a partir de la clase
    las clases serán el modelo del cual podemos definir propiedades de los objetos
    */
    constructor(id, nombre, apellido, nota) {

        this.numero = id
        this.primerNombre = nombre
        this.surname = apellido
        this.calificacion = nota
    }
    /*
    Reflexion: 
    El puntero .this nos ayuda para poder diferenciar y acceder a las propiedades
    de los argumentos recibidos por el constructor
    */

    /*
     b.2 Metodos/funciones
    */

    mostrarAlumnos() {
        document.write(`datos del alumno: ${this.numero}, nombre: ${this.primerNombre} y apellidos: ${this.surname} y nota: ${this.calificacion} <br>`);
    }


}//Cierre del class------------------------ 

/*
   b.3 Acciones, que recurren al uso de los metodos, fuera de la clase
   */
for (let i in alumnos) {
    let [id, nombre, apellido, nota] = alumnos[i]//Configurando las propiedades
    let listaAlumnos = new Alumno(id, nombre, apellido, nota);
    listaAlumnos.mostrarAlumnos()//Esa coyuntura entre metodos y variable que absorbe las propiedades del objeto/clase

}

function ejecutar() {
    
    for (let i in alumnos) {
        let [id, nombre, apellido, nota] = alumnos[i]//Configurando las propiedades
        let todos = new Alumno(id, nombre, apellido, nota);
        todos.mostrarAlumnos()

    }

}