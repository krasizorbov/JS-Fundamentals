function solution(input = []) {
  let result = input.slice(0);
  let max = 0;
  while (true) {
    let line = result.shift();
    if (line === "end") {
      break;
    }
    let digits = line.split(":")[1].split("/").map(Number);
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] > max) {
        max = digits[i];
      }
    }
  }
  let str = " ".repeat(max);
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "end") {
      break;
    }
    let char = input[i].split(":")[0];
    let indexes = input[i].split(":")[1].split("/").map(Number);
    for (let j = 0; j < indexes.length; j++) {
      let first = str.substring(0, indexes[j]);
      let second = str.substring(indexes[j] + 1);
      str = first + char + second;
    }
  }
  console.log(str);
}
solution([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
