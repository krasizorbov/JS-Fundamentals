function tasksPlanner(input = []) {
  let result = input.shift().split(" ").map(Number);
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    if (command === "Complete") {
      let index = +commands[1];
      if (index >= 0 && index < result.length) {
        result[index] = 0;
      }
    } else if (command === "Change") {
      let index = +commands[1];
      let time = +commands[2];
      if (index >= 0 && index < result.length) {
        result[index] = time;
      }
    } else if (command === "Drop") {
      let index = +commands[1];
      if (index >= 0 && index < result.length) {
        result[index] = -1;
      }
    } else if (command === "Count") {
      let order = commands[1];
      if (order === "Completed") {
        console.log(result.filter((x) => x == 0).length);
      } else if (order === "Incomplete") {
        console.log(result.filter((x) => x > 0).length);
      } else if (order === "Dropped") {
        console.log(result.filter((x) => x < 0).length);
      }
    } else if (command === "End") {
      console.log(result.filter((x) => x > 0).join(" "));
      break;
    }
  }
}
tasksPlanner([
  "1 2 3 4 5 4 0 3 2 1",
  "Complete 0",
  "Complete 1",
  "Complete 2",
  "Drop 3",
  "Change 4 1",
  "Count Completed",
  "End",
]);
