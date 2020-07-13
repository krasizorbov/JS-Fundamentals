function solution(input = []) {
  let str = input.shift();
  for (const line of input) {
    let command = line.split(" ")[0];
    if (command === "Translate") {
      let char = line.split(" ")[1];
      let replacement = line.split(" ")[2];
      while (str.includes(char)) {
        str = str.replace(char, replacement);
      }
      console.log(str);
    } else if (command === "Includes") {
      let sub = line.split(" ")[1];
      if (str.includes(sub)) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (command === "Start") {
      let sub = line.split(" ")[1];
      let index = sub.length;
      let first = str.substring(0, index);
      if (first === sub) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (command === "Lowercase") {
      str = str.toLowerCase();
      console.log(str);
    } else if (command === "FindIndex") {
      let char = line.split(" ")[1];
      let index = str.lastIndexOf(char);
      console.log(index);
    } else if (command === "Remove") {
      let start = +line.split(" ")[1];
      let count = +line.split(" ")[2];
      let first = str.substring(0, start);
      let second = str.substring(start + count);
      str = first + second;
      console.log(str);
    } else if (command === "End") {
      break;
    }
  }
}
solution([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);
