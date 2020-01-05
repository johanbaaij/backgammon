import Game from "@/game.ts";
import { expect } from "chai";

import { STARTING_POSITIONS } from "@/constants.ts";

describe("New game", () => {
  it("has starting positions for both players", () => {
    const game = new Game();
    expect(game.playerBlack.positions).to.contain(STARTING_POSITIONS);
    expect(game.playerWhite.positions).to.contain(STARTING_POSITIONS);
  });
});
