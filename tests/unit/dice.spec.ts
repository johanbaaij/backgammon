import Dice from "@/dice.ts";
import { expect } from "chai";

describe("Dice", () => {
  it("rolls two dice", () => {
    const dice = new Dice();
    dice.roll();

    expect(dice.result).to.have.lengthOf(2);
  });

  it("returns results between 1 and 6", () => {
    const dice = new Dice();
    dice.roll();
    expect(dice.result[0])
      .to.be.at.least(1)
      .and.at.most(6);
  });
});
