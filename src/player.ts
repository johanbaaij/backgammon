import Positions from "@/positions";
import Dice from "@/dice";

export default class Player {
  name: String;
  dice: Dice;
  positions: Positions;

  constructor(name: string) {
    this.name = name;
    this.positions = new Positions();
    this.dice = new Dice();
  }
}
