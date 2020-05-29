function weaponSmith(input = []) {
  let weapon = input.shift().split("|");
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let direction = commands[1];
    let index = +commands[2];
    if (command === "Move" && direction === "Right") {
      if (index >= 0 && index < weapon.length - 1) {
        let removed = weapon[index + 1];
        weapon[index + 1] = weapon[index];
        weapon[index] = removed;
      }
    } else if (command === "Move" && direction === "Left") {
      if (index >= 1 && index < weapon.length) {
        let removed = weapon[index - 1];
        weapon[index - 1] = weapon[index];
        weapon[index] = removed;
      }
    } else if (command === "Check" && direction === "Even") {
      let result = weapon.filter((el, index) => index % 2 === 0);
      console.log(result.join(" "));
      result = [];
    } else if (command === "Check" && direction === "Odd") {
      let result = weapon.filter((el, index) => index % 2 !== 0);
      console.log(result.join(" "));
      result = [];
    } else {
      console.log(`You crafted ${weapon.join("")}!`);
    }
  }
}
weaponSmith([
  "ha|Do|mm|om|er",
  "Move Right 0",
  "Move Left 3",
  "Check Odd",
  "Move Left 2",
  "Move Left 10",
  "Move Left 0",
  "Done",
]);
