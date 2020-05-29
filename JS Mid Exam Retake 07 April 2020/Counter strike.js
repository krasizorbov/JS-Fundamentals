function counterStrike(input = []) {
  let count = 0;
  let energy = +input.shift();
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "End of battle") {
      console.log(`Won battles: ${count}. Energy left: ${energy}`);
      return;
    }
    if (energy - Number(input[i]) >= 0) {
      energy -= +input[i];
      count++;
      if (count % 3 === 0) {
        energy += count;
      }
    } else {
      console.log(
        `Not enough energy! Game ends with ${count} won battles and ${energy} energy`
      );
      return;
    }
  }
  console.log(`Won battles: ${count}. Energy left: ${energy}`);
}
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
