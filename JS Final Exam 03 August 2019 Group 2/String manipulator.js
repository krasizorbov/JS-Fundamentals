function solution(input = []) {
  let str = input.shift();
  for (const line of input) {
    let command = line.split(" ")[0];
    if (command === "Change") {
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
        continue;
      }
      console.log("False");
    } else if (command === "End") {
      let sub = line.split(" ")[1];
      let part = str.substring(str.length - sub.length);
      if (sub === part) {
        console.log("True");
        continue;
      }
      console.log("False");
    } else if (command === "Uppercase") {
      str = str.toUpperCase();
      console.log(str);
    } else if (command === "FindIndex") {
      let char = line.split(" ")[1];
      let index = str.indexOf(char);
      console.log(index);
    } else if (command === "Cut") {
      let start = +line.split(" ")[1];
      let length = +line.split(" ")[2];
      str = str.substring(start, start + length);
      console.log(str);
    } else if (command === "Done") {
      break;
    }
  }
}
solution([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
