function cardGame(input) {
  let deck = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let result = {};
  for (let i = 0; i < input.length; i++) {
    let words = input[i].split(": ");
    let name = words[0];
    let cards = words[1].split(", ");
    if (result[name] === undefined) {
      result[name] = new Set();
    }
    cards.forEach((card) => {
      result[name].add(card);
    });
  }

  for (const key in result) {
    let arr = Array.from(result[key]);
    let sum = 0;
    arr.forEach((card) => {
      let tokens = card.split("");
      let type = tokens.pop();
      let power = tokens.join("");
      sum += deck[power] * deck[type];
    });
    console.log(`${key}: ${sum}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
