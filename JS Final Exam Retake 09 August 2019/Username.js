function solution(input = []) {
  let str = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "Case" && line[1] === "upper") {
      str = str.toUpperCase();
      console.log(str);
    } else if (command === "Case" && line[1] === "lower") {
      str = str.toLowerCase();
      console.log(str);
    } else if (command === "Reverse") {
      let start = +line[1];
      let end = +line[2];
      if (start >= 0 && start < str.length && end >= 0 && end < str.length) {
        let sub = str
          .substring(start, end + 1)
          .split("")
          .reverse()
          .join("");
        console.log(sub);
      }
    } else if (command === "Cut") {
      let sub = line[1];
      if (!str.includes(sub)) {
        console.log(`The word ${str} doesn't contain ${sub}.`);
      } else {
        let index = str.indexOf(sub);
        let first = str.substring(0, index);
        let second = str.substring(index + sub.length);
        str = first + second;
        console.log(str);
      }
    } else if (command === "Replace") {
      let char = line[1];
      while (str.includes(char)) {
        str = str.replace(char, "*");
      }
      console.log(str);
    } else if (command === "Check") {
      let char = line[1];
      if (str.includes(char)) {
        console.log("Valid");
      } else {
        console.log(`Your username must contain ${char}.`);
      }
    } else if (command === "Sign") {
      break;
    }
  }
}
solution(["ThisIsMyString", "Reverse 1 4", "Replace i", "Cut My", "Sign up"]);
