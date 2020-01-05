import { GAME_STATES } from "@/constants";
import Player from "@/player";

export default class Game {
  playerWhite: Player;
  playerBlack: Player;
  state: GAME_STATES;

  constructor() {
    this.playerWhite = new Player("white");
    this.playerBlack = new Player("black");
    this.state = GAME_STATES.OpeningRoll;
  }
}
