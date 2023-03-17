
import { Component } from '@angular/core';
import { PokemonService } from './servicio/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//-------------------INYECTAMOS EL SERVICIO------------------------\\

export class AppComponent {
  title = 'ejercicio5: SevicioRest';

  nombre: string = '';
  pokemons: any = [];
  pokemon: any = null;


  constructor(private pokemonService: PokemonService) {

    this.pokemonService.getAll().subscribe((datos: any) => {
      
      this.pokemons = datos.results;
    });
  }

  buscar() {
    this.pokemonService.buscar(this.nombre).subscribe((item) => {
      this.pokemon = item;
      return null;
    });
  }

}
