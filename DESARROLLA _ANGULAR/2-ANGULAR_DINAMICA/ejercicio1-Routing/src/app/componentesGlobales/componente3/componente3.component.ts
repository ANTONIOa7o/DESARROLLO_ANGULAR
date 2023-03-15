import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//importacion automatica, desde el momento que es invocado en el constructor

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private rutaInterna:ActivatedRoute) { 

    console.log('Parámetro defindo:' + this.rutaInterna.snapshot.params['alpha']);//referenciado al app.module.ts
    console.log('Cantidad recibida:' + this.rutaInterna.snapshot.queryParams.efectivo)


  }

  ngOnInit(): void {
  }

}
