import { Component } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-chercheur-pokemon',
  templateUrl: './chercheur-pokemon.component.html',
  styleUrl: './chercheur-pokemon.component.css'
})
export class ChercheurPokemonComponent {
  id: string = '';
  pokemon_list: Pokemon[] = [
    new Pokemon("Pikachu"),
    new Pokemon("Alabama"),
    new Pokemon("Nord-Pas-De-Calais"),
    new Pokemon("Volgograd"),
    new Pokemon("Shanghai")
  ];
}
