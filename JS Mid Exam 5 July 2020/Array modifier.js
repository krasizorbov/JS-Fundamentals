function solution(input = []) {
  let result = input.shift().split(" ").map(Number);
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "swap") {
      let index1 = +line[1];
      let index2 = +line[2];
      let temp = result[index1];
      result[index1] = result[index2];
      result[index2] = temp;
    } else if (command === "multiply") {
      let index1 = +line[1];
      let index2 = +line[2];
      result[index1] = result[index1] * result[index2];
    } else if (command === "decrease") {
      for (let j = 0; j < result.length; j++) {
        result[j] -= 1;
      }
    } else if (command === "end") {
      break;
    }
  }
  console.log(result.join(", "));
}
solution([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
