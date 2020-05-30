function treasureHunt(input = []) {
  let treasure = input.shift().split("|");
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    if (command === "Loot") {
      for (let j = 1; j < commands.length; j++) {
        if (!treasure.includes(commands[j])) {
          treasure.unshift(commands[j]);
        }
      }
    } else if (command === "Drop") {
      let index = +commands[1];
      if (index >= 0 && index < treasure.length) {
        let removed = treasure.splice(index, 1);
        treasure.push(removed);
      }
    } else if (command === "Steal") {
      let count = +commands[1];
      let stolen = [];
      if (count < treasure.length) {
        stolen = treasure.splice(treasure.length - count, count);
        console.log(stolen.join(", "));
      } else {
        stolen = treasure.splice(0, treasure.length);
        console.log(stolen.join(", "));
      }
    } else if (command === "Yohoho!") {
      break;
    }
  }
  let sum = 0;
  for (let i = 0; i < treasure.length; i++) {
    sum += treasure[i].length;
  }
  let average = sum / treasure.length;
  if (treasure.length === 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
