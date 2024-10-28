import { Component } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeApiServiceService} from '../poke-api-service.service';

@Component({
  selector: 'app-chercheur-pokemon',
  templateUrl: './chercheur-pokemon.component.html',
  styleUrl: './chercheur-pokemon.component.css',
})
export class ChercheurPokemonComponent {
  amountToRetrieve: number = 10;
  selectedPokemonId: string = "";
  selectedPokemonName: string = "";
  isSelectedPokemonToggleOn: boolean = false;
  pokemon_list: Pokemon[] = [];

  constructor(private apiService: PokeApiServiceService) {}

  protected readonly navigator = navigator;

  go(){
    this.apiService.getPokemons(this.amountToRetrieve).subscribe(pokemons => {
      Pokemon.resetID(); this.pokemon_list = [] // Pour ne pas re-recuperer les memes pokemons
      for (const pokemon of pokemons.results) {
        this.pokemon_list.push(new Pokemon(pokemon.name));
      }
    })
  }
}
