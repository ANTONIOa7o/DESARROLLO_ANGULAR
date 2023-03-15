import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio2-AngularMaterial';


  nombres: any =[
    {nombre:'Juan',color:'yellow'},
    {nombre:'Maria',color:'orange'},
    {nombre:'Carlos',color:'green'},
    {nombre:'Luisa',color:'navy'},
    {nombre:'Luisa',color:'blue'},
    {nombre:'Pedro',color:'pink'}
  ];
  //Variable definida en Angular Material
  showFiller = false;
}
