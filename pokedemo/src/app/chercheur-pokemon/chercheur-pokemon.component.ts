import { Component } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeApiServiceService} from '../poke-api-service/poke-api-service.service';

@Component({
  selector: 'app-chercheur-pokemon',
  templateUrl: './chercheur-pokemon.component.html',
  styleUrl: './chercheur-pokemon.component.css',
})
export class ChercheurPokemonComponent {
  amountToRetrieve: number = 25;
  selectedPokemon: Pokemon = new Pokemon("None");
  isSelectedPokemonToggleOn: boolean = true;
  pokemon_list: Pokemon[] = [];
  pokemonId = "";
  pokemonName = "";

  constructor(private apiService: PokeApiServiceService) {}

  protected readonly navigator = navigator;

  ngOnInit() {
    this.fillPokemonList();
  }

  selectPokemon(){
    let temp:Pokemon[] = this.pokemon_list.filter(pokemon => pokemon.name === this.pokemonName);
    if(temp.length === 0){
      temp = this.pokemon_list.filter(pokemon => pokemon.id === this.pokemonId);
      if (temp.length != 0){
        this.selectedPokemon = temp[0];
        this.isSelectedPokemonToggleOn = false;
      }
    }
    else{
      this.selectedPokemon = temp[0];
      this.isSelectedPokemonToggleOn = false;
    }
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
