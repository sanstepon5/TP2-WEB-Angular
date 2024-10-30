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
  selectedPokemon: Pokemon = new Pokemon("None");
  isSelectedPokemonToggleOn: boolean = false;
  pokemon_list: Pokemon[] = [];

  constructor(private apiService: PokeApiServiceService) {}

  protected readonly navigator = navigator;

  ngOnInit() {
    this.fillPokemonList();
  }

  fillPokemonList(){
    this.apiService.getPokemons(this.amountToRetrieve).subscribe(pokemons => {
      Pokemon.resetID(); this.pokemon_list = [] // Pour ne pas re-recuperer les memes pokemons
      for (const poke of pokemons.results) {
        this.apiService.getPokemonDetails(poke.url).subscribe(pokemon => {
          let pokemonCreate: Pokemon = new  Pokemon(pokemon);
          this.pokemon_list.push(pokemonCreate);
          //pokemonCreate.displayInfo();
        });
      }
    })
  }
}
