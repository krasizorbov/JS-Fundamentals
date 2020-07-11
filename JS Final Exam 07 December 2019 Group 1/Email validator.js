function solution(input = []) {
  let str = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "Make" && line[1] === "Upper") {
      str = str.toUpperCase();
      console.log(str);
    } else if (command === "Make" && line[1] === "Lower") {
      str = str.toLowerCase();
      console.log(str);
    } else if (command === "GetDomain") {
      let count = +line[1];
      let part = str.substring(str.length - count);
      console.log(part);
    } else if (command === "GetUsername") {
      if (!str.includes("@")) {
        console.log(`The email ${str} doesn't contain the @ symbol.`);
      } else {
        let index = str.indexOf("@");
        let sub = str.substring(0, index);
        console.log(sub);
      }
    } else if (command === "Replace") {
      let char = line[1];
      while (str.includes(char)) {
        str = str.replace(char, "-");
      }
      console.log(str);
    } else if (command === "Encrypt") {
      let result = [];
      for (let j = 0; j < str.length; j++) {
        let num = str[j].charCodeAt(0);
        result.push(num);
      }
      console.log(...result);
    } else if (command === "Complete") {
      break;
    }
  }
}
solution([
  "Mike123@somemail.com",
  "Make Upper",
  "GetDomain 3",
  "GetUsername",
  "Encrypt",
  "Complete",
]);
