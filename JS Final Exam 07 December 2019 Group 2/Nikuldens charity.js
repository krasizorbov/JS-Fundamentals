function solution(input = []) {
  let str = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "Replace") {
      let existing = line[1];
      let char = line[2];
      while (str.includes(existing)) {
        str = str.replace(existing, char);
      }
      console.log(str);
    } else if (command === "Cut") {
      let start = +line[1];
      let end = +line[2];
      if (start >= 0 && start < str.length && end >= 0 && end < str.length) {
        let first = str.substring(0, start);
        let second = str.substring(end + 1);
        str = first + second;
        console.log(str);
      } else {
        console.log("Invalid indexes!");
      }
    } else if (command === "Make" && line[1] === "Upper") {
      str = str.toUpperCase();
      console.log(str);
    } else if (command === "Make" && line[1] === "Lower") {
      str = str.toLowerCase();
      console.log(str);
    } else if (command === "Check") {
      let sub = line[1];
      if (str.includes(sub)) {
        console.log(`Message contains ${sub}`);
      } else {
        console.log(`Message doesn't contain ${sub}`);
      }
    } else if (command === "Sum") {
      let start = +line[1];
      let end = +line[2];
      if (start >= 0 && start < str.length && end >= 0 && end < str.length) {
        let sub = str.substring(start, end + 1);
        let sum = 0;
        for (let j = 0; j < sub.length; j++) {
          sum += sub[j].charCodeAt(0);
        }
        console.log(sum);
      } else {
        console.log("Invalid indexes!");
      }
    } else if (command === "Finish") {
      break;
    }
  }
}
solution([
  "ILikeSharan",
  "Replace a e",
  "Make Upper",
  "Check SHEREN",
  "Sum 1 4",
  "Cut 1 4",
  "Finish",
]);
