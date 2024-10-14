export class Pokemon {
  static max_id: number = 0
  id: string = '';
  name: string = '';
  constructor(name:string) {
    this.id = String(Pokemon.max_id);
    this.name = name;
    Pokemon.max_id++;
  }
}
