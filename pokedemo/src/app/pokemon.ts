
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
    if (typeof(data) == "string"){
      this.name = data;
      this.height = 0;
      this.sprite = "";
      this.weight = 0;
      this.hp = 0;
      this.damage = 0;
      this.defense  = 0;

      this.moves = [];
      this.id = "0";
    }
    else {
      this.name = data.name;
      this.height = data.height;
      this.sprite = "";
      this.weight = data.weight;
      this.hp = data.stats[0].base_stat;
      this.damage = data.stats[1].base_stat;
      this.defense  = data.stats[2].base_stat;

      this.moves = data.moves.map((moveStructure: { move: { name: any; }; }) => moveStructure.move.name);
      this.id = data.id;
    }



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
