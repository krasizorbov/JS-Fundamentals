function solution(input = []) {
  let result = input.shift().split(" ").map(Number);
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "Change") {
      let existing = +line[1];
      let newNumber = +line[2];
      if (result.includes(existing)) {
        let index = result.indexOf(existing);
        result[index] = newNumber;
      }
    } else if (command === "Hide") {
      let num = +line[1];
      if (result.includes(num)) {
        let index = result.indexOf(num);
        result.splice(index, 1);
      }
    } else if (command === "Switch") {
      let first = +line[1];
      let second = +line[2];
      if (result.includes(first) && result.includes(second)) {
        let index1 = result.indexOf(first);
        let index2 = result.indexOf(second);
        let temp = result[index1];
        result[index1] = result[index2];
        result[index2] = temp;
      }
    } else if (command === "Insert") {
      let index = +line[1];
      let num = +line[2];
      if (index >= 0 && index < result.length - 1) {
        result.splice(index + 1, 0, num);
      }
    } else if (command === "Reverse") {
      result.reverse();
    } else if (command === "END") {
      break;
    }
  }
  console.log(...result);
}
solution([
  "115 115 101 114 73 111 116 75",
  "Insert 5 114",
  "Switch 116 73",
  "Hide 75",
  "Reverse ",
  "Change 73 70",
  "Insert 10 85",
  "END",
]);
