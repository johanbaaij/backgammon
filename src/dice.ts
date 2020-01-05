export default class Dice {
  result: Array<Number>;

  constructor() {
    this.result = [];
  }

  roll() {
    this.result = [
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ];
  }
}
