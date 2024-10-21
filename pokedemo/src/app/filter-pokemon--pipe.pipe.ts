import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from './pokemon';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokes: Pokemon[], pokemon_name?: string, searchString?: string): Pokemon[] {
    if(typeof searchString == 'undefined'){
      return pokes;
    }
    else if (typeof pokes !== 'undefined' && typeof pokemon_name !== 'undefined') {
      return pokes.filter((poke) => {
        return poke.id.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

}
