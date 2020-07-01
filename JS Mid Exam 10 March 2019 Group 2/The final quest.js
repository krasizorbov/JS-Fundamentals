function solution(input = []) {
  let str = input.shift().split(" ");
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "Delete") {
      let index = +line[1] + 1;
      if (index >= 0 && index < str.length) {
        str.splice(index, 1);
      }
    }
    if (command === "Swap") {
      let first = line[1];
      let second = line[2];
      if (str.includes(first) && str.includes(second)) {
        let temp = first;
        let index1 = str.indexOf(first);
        let index2 = str.indexOf(second);
        str[index1] = second;
        str[index2] = temp;
      }
    }
    if (command === "Put") {
      let word = line[1];
      let index = +line[2] - 1;
      if (index >= 0 && index <= str.length) {
        str.splice(index, 0, word);
      }
    }
    if (command === "Sort") {
      str.sort((a, b) => b.localeCompare(a));
    }
    if (command === "Replace") {
      let first = line[1];
      let second = line[2];
      if (str.includes(second)) {
        let index = str.indexOf(second);
        str[index] = first;
      }
    }
    if (command === "Stop") {
      break;
    }
  }
  console.log(...str);
}
solution([
  "Congratulations! You last also through the have challenge!",
  "Swap have last",
  "Replace made have",
  "Delete 2",
  "Put it 4",
  "Stop",
  "",
]);
