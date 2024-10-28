import { Component } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-chercheur-pokemon',
  templateUrl: './chercheur-pokemon.component.html',
  styleUrl: './chercheur-pokemon.component.css',
})
export class ChercheurPokemonComponent {
  searchString: string = '';
  selectedPokemonId: string = "";
  selectedPokemonName: string = "";
  isSelectedPokemonToggleOn: boolean = false;
  pokemon_list: Pokemon[] = [
    new Pokemon("Pikachu"),
    new Pokemon("Alabama"),
    new Pokemon("Nord-Pas-De-Calais"),
    new Pokemon("Volgograd"),
    new Pokemon("Shanghai")
  ];

  protected readonly navigator = navigator;
  go(){
    console.log("ID du pokemon est : " + this.selectedPokemonId)
  }
}
