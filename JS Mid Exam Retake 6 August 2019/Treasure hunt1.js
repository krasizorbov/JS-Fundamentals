function solve(input = []) {
  let treasureChest = input.shift().split("|");

  let command;
  while ((command = input.shift()) !== "Yohoho!") {
    let currCommand = command.split(" ");

    switch (currCommand[0]) {
      case "Loot":
        let loot = currCommand
          .slice(1)
          .filter((item) => !treasureChest.includes(item))
          .reverse();
        treasureChest.unshift(...loot);
        break;
      case "Drop":
        let index = +currCommand[1];
        if (index >= 0 && index < treasureChest.length) {
          treasureChest.push(treasureChest.splice(index, 1));
        }
        break;
      case "Steal":
        let count = +currCommand[1];
        let start = Math.max(0, treasureChest.length - count);
        let stolenList = treasureChest.splice(start);
        console.log(stolenList.join(", "));
        break;
    }
  }

  if (treasureChest.length === 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    let treasure = treasureChest.reduce((acc, loot) => acc + loot).length;
    let averageLoot = treasure / treasureChest.length;
    console.log(
      `Average treasure gain: ${averageLoot.toFixed(2)} pirate credits.`
    );
  }
}
