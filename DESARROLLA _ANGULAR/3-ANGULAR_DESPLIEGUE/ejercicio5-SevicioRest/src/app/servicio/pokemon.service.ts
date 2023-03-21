import { Injectable } from '@angular/core';

//forzamos importacion, ya no accede desde el servicio a la libreria
import {HttpHeaders,HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})



//--------------------DECLARAMOS EL SERVICIO-----------------------\\
export class PokemonService {

  //1º Declaramos las variables
  url = 'https://pokeapi.co/api/v2/pokemon';
  cabecera = new HttpHeaders({"Content-type":"application/json"});

//2º Generar las llamadas get y post
  constructor(private respuesta:HttpClient) { }

//3º Acceso general a la informacion que me ofrece la Api y muestra de los datos
public getAll(){
return this.respuesta.get(this.url,{headers:this.cabecera});

}
public buscar(nombre:string){
    let otraurl = this.url + '/' + nombre;
    return this.respuesta.get(otraurl,{headers:this.cabecera});
}
  
}
