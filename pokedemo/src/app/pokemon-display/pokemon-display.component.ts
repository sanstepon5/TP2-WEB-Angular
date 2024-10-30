import {Component, Input} from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrl: './pokemon-display.component.css'
})
export class PokemonDisplayComponent {
  @Input() pokemon!: Pokemon;
}
