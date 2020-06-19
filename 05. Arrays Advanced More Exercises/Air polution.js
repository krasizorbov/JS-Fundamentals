function airPollution(input, commands) {
  let result = [];
  let polluted = "Polluted areas: ";
  for (let i = 0; i < 5; i++) {
    result.push(input.shift().split(" ").map(Number));
  }
  for (let j = 0; j < commands.length; j++) {
    let split = commands[j].split(" ");
    let command = split[0];
    let index = +split[1];
    for (let m = 0; m < result.length; m++) {
      for (let n = 0; n < result[m].length; n++) {
        if (
          command.toLowerCase() === "breeze" &&
          m === index &&
          m >= 0 &&
          m < result.length
        ) {
          result[m][n] = Math.max(result[m][n] - 15, 0);
        }
        if (
          command.toLowerCase() === "gale" &&
          n === index &&
          n >= 0 &&
          n < result[m].length
        ) {
          result[m][n] = Math.max(result[m][n] - 20, 0);
        }
        if (command === "smog") {
          result[m][n] += index;
        }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] >= 50) {
        polluted += "[" + i + "-" + j + "]" + "," + " ";
      }
    }
  }

  if (polluted === "Polluted areas: ") {
    console.log("No polluted areas");
  } else {
    polluted = polluted.slice(0, -2);
    console.log(polluted);
  }
}
airPollution(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);
