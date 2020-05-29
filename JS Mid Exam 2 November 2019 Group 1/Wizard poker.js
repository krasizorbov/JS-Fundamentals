function wizardPoker(input = []) {
  let poker = input.shift().split(":");
  let newDeck = [];
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let name = commands[1];
    if (command === "Add") {
      if (poker.includes(name)) {
        newDeck.push(name);
      } else {
        console.log(`Card not found.`);
      }
    } else if (command === "Insert") {
      let index = +commands[2];
      if (poker.includes(name) && index >= 0 && index < newDeck.length) {
        newDeck.splice(index, 0, name);
      } else {
        console.log("Error!");
      }
    } else if (command === "Remove") {
      if (newDeck.includes(name)) {
        let index = newDeck.indexOf(name);
        newDeck.splice(index, 1);
      } else {
        console.log("Card not found.");
      }
    } else if (command === "Swap") {
      let index1 = newDeck.indexOf(name);
      let second = commands[2];
      let index2 = newDeck.indexOf(second);
      let temp = newDeck[index2];
      newDeck[index2] = newDeck[index1];
      newDeck[index1] = temp;
    } else if (command === "Shuffle") {
      newDeck.reverse();
    } else if (command === "Ready") {
      console.log(newDeck.join(" "));
    }
  }
}
wizardPoker([
  "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
  "Add Moonfire",
  "Add Pounce",
  "Add Bite",
  "Add Wrath",
  "Insert Claw 0",
  "Swap Claw Moonfire",
  "Remove Bite",
  "Shuffle deck",
  "Ready",
]);
