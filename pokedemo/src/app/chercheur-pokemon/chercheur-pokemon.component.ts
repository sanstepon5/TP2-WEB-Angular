import { Component } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeApiServiceService} from '../poke-api-service/poke-api-service.service';

@Component({
  selector: 'app-chercheur-pokemon',
  templateUrl: './chercheur-pokemon.component.html',
  styleUrl: './chercheur-pokemon.component.css',
})
export class ChercheurPokemonComponent {
  amountToRetrieve: number = 10;
  selectedPokemon: Pokemon = new Pokemon("None");
  isSelectedPokemonToggleOn: boolean = true;
  pokemon_list: Pokemon[] = [];

  constructor(private apiService: PokeApiServiceService) {}

  protected readonly navigator = navigator;

  ngOnInit() {
    this.fillPokemonList();
  }

  fillPokemonList(){
    this.apiService.getPokemons(this.amountToRetrieve).subscribe(pokemons => {
      Pokemon.resetID(); this.pokemon_list = [] // Pour ne pas re-recuperer les memes pokemons
      for (let poke of pokemons.results) {
        this.apiService.getPokemonDetails(poke.url).subscribe(pokemon => {
          let pokemonCreate: Pokemon = new  Pokemon(pokemon);
          this.setPokemonDesc(pokemonCreate)
          this.pokemon_list.push(pokemonCreate);
        });
      }
    })
  }


  setPokemonDesc(pokemon: Pokemon) {
      this.apiService.getPokemonSpecies(pokemon.id).subscribe(species => {
        pokemon.description = species.flavor_text_entries[0].flavor_text;
      })
  }
}
