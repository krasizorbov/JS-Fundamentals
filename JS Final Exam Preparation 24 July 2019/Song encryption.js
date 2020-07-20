function solution(input = []) {
  let pattern = /^([A-Z][a-z\s\']+)\:([A-Z\s*]+)$/;
  for (let i = 0; i < input.length; i++) {
    let result = input[i].match(pattern);
    if (input[i] === "end") {
      break;
    }
    if (result !== null) {
      let key = result[1].length;
      let str = "";
      for (let j = 0; j < input[i].length; j++) {
        let char = input[i][j];
        if (char === ":") {
          str += "@";
        } else if (char === "'") {
          str += "'";
        } else if (char === " ") {
          str += " ";
        } else {
          if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            if (char.charCodeAt(0) + key <= 90) {
              str += String.fromCharCode(char.charCodeAt(0) + key);
            } else {
              let diff = 90 - char.charCodeAt(0);
              let numToAdd = key - diff;
              str += String.fromCharCode(64 + numToAdd);
            }
          } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            if (char.charCodeAt(0) + key <= 122) {
              str += String.fromCharCode(char.charCodeAt(0) + key);
            } else {
              let diff = 122 - char.charCodeAt(0);
              let numToAdd = key - diff;
              str += String.fromCharCode(96 + numToAdd);
            }
          }
        }
      }
      console.log(`Successful encryption: ${str}`);
    } else {
      console.log("Invalid input!");
    }
  }
}
solution([
  "Eminem:VENOM",
  "Linkin park:NUMB",
  "Drake:NONSTOP",
  "Adele:HELLO",
  "end",
]);
