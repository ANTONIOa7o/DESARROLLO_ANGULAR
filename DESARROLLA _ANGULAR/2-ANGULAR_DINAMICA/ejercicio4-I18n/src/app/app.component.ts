import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio4:Internacionalizacion';
  
  idioma:string ='es';

  constructor(private traductor:TranslateService){
    this.traductor.use(this.idioma)
  }

cambiarIdioma(nuevaIdioma:string){
  this.idioma = nuevaIdioma;
  this.traductor.use(this.idioma)
}


}
