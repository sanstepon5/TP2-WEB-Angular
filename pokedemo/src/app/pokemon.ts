
export class Pokemon {
  static max_id: number = 0
  id: string;
  height: number;
  weight: number;
  sprite : string ;
  selected: boolean = false;
  name: string = '';
  hp : number;
  damage : number;
  defense : number;
  moves : string[];

  constructor(data: any){
    this.name = data.name;
    this.height = data.height;
    this.sprite = data.sprites.front_default;
    this.weight = data.weight;
    this.hp = data.stats[0].base_stat;
    this.damage = data.stats[1].base_stat;
    this.defense  = data.stats[2].base_stat;

    this.moves = data.moves.map((moveStructure: { move: { name: any; }; }) => moveStructure.move.name);
    this.id = data.id;

  }

  displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`)
    console.log(`Weight: ${this.weight}`);
    console.log(`hp: ${this.hp}`);
    console.log(`damage: ${this.damage}`);
    console.log(`defense : ${this.defense }`);
  }

  static resetID(){
    Pokemon.max_id = 0;
  }
}
