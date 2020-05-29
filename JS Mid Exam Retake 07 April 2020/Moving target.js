function movingTarget(input = []) {
  let targets = input.shift().split(" ").map(Number);
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    let index = +commands[1];
    let power = +commands[2];
    if (command === "Shoot" && index >= 0 && index < targets.length) {
      targets[index] -= power;
      if (targets[index] <= 0) {
        targets.splice(index, 1);
      }
    } else if (command === "Add") {
      if (index >= 0 && index < targets.length) {
        targets.splice(index, 0, power);
      } else {
        console.log(`Invalid placement!`);
      }
    } else if (command === "Strike" && index >= 0 && index < targets.length) {
      if (index - power >= 0 && index + power < targets.length) {
        targets.splice(index - power, power + power + 1);
      } else {
        console.log(`Strike missed!`);
      }
    } else if (command === "End") {
      console.log(targets.join("|"));
    }
  }
}
movingTarget([
  "47 55 85 78 99 20",
  "Shoot 1 55",
  "Shoot 8 15",
  "Strike 2 3",
  "Add 0 22",
  "Add 2 40",
  "Add 2 50",
  "End",
]);
