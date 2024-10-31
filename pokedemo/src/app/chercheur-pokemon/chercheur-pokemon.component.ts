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
  pokemonName: string = "";
  pokemonId: string = "";
  selectedPokemon: Pokemon = new Pokemon("None");
  selectedPokemonBool: boolean = false;

  isSelectedPokemonToggleOn: boolean = false;
  pokemon_list: Pokemon[] = [];

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
      }
    }
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
