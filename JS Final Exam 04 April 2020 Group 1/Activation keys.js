function solution(input = []) {
  let str = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(">>>");
    let command = line[0];
    if (command === "Contains") {
      let sub = line[1];
      if (str.includes(sub)) {
        console.log(`${str} contains ${sub}`);
      } else {
        console.log("Substring not found!");
      }
    } else if (command === "Flip" && line[1] === "Upper") {
      let start = +line[2];
      let end = +line[3];
      let lower = str.substring(start, end);
      let upper = lower.toUpperCase();
      str = str.replace(lower, upper);
      console.log(str);
    } else if (command === "Flip" && line[1] === "Lower") {
      let start = +line[2];
      let end = +line[3];
      let upper = str.substring(start, end);
      let lower = upper.toLowerCase();
      str = str.replace(upper, lower);
      console.log(str);
    } else if (command === "Slice") {
      let start = +line[1];
      let end = +line[2];
      let first = str.substring(0, start);
      let second = str.substring(end);
      str = first + second;
      console.log(str);
    } else if (command === "Generate") {
      console.log(`Your activation key is: ${str}`);
    }
  }
}
solution([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>24>>>26",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>12>>>16",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
