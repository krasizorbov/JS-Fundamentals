function numberArray(input = []) {
  let result = input.shift().split(" ").map(Number);
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    if (command === "Switch") {
      let index = +commands[1];
      if (index >= 0 && index < result.length) {
        result[index] = -result[index];
      }
    } else if (command === "Change") {
      let index = +commands[1];
      let value = +commands[2];
      if (index >= 0 && index < result.length) {
        result[index] = value;
      }
    } else if (command === "Sum") {
      let positiveNegative = commands[1];
      let total = sum(result, positiveNegative);
      console.log(total);
    } else if (command === "End") {
      break;
    }
  }
  console.log(result.filter((val) => val >= 0).join(" "));

  function sum(array = [], command) {
    let total = 0;
    if (command === "Positive") {
      total = array.filter((x) => x >= 0).reduce((a, c) => a + c);
    }
    if (command === "Negative") {
      total = array.filter((x) => x < 0).reduce((a, c) => a + c);
    }
    if (command === "All") {
      total = array.reduce((a, c) => a + c);
    }
    return total;
  }
}
numberArray([
  "1 2 3 4 5",
  "Switch 4",
  "Change 0 -3",
  "Sum Negative",
  "Sum Positive",
  "End",
]);
