import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from '../pokemon';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(pokemonList: Pokemon[], selectedPokemonId?: string): Pokemon | undefined {
    if (!selectedPokemonId) {
      return undefined;
    }
    return pokemonList.find(pokemon => pokemon.id === selectedPokemonId);
  }
}
