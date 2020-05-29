function archeryTournament(input = []) {
  let field = input.shift().split("|").map(Number);
  let points = 0;
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split("@");
    let command = commands[0];
    let index = +commands[1];
    let length = +commands[2];
    if (command === "Shoot Right" && index >= 0 && index < field.length) {
      let targetIndex = index + length;
      while (targetIndex >= field.length) {
        targetIndex = targetIndex - field.length;
      }
      if (field[targetIndex] >= 5) {
        field[targetIndex] -= 5;
        points += 5;
      } else {
        points += field[targetIndex];
        field[targetIndex] = 0;
      }
    } else if (command === "Shoot Left" && index >= 0 && index < field.length) {
      let targetIndex = index - length;
      while (targetIndex < 0) {
        targetIndex = field.length + targetIndex;
      }
      if (field[targetIndex] >= 5) {
        field[targetIndex] -= 5;
        points += 5;
      } else {
        points += field[targetIndex];
        field[targetIndex] = 0;
      }
    } else if (command === "Reverse") {
      field.reverse();
    } else if (command === "Game over") {
      console.log(field.join(" - "));
      console.log(
        `Iskren finished the archery tournament with ${points} points!`
      );
    }
  }
}
archeryTournament([
  "10|10|10|10|10",
  "Shoot Left@0@2",
  "Shoot Right@4@5",
  "Shoot Right@6@5",
  "Reverse",
  "Game over",
  "",
]);
