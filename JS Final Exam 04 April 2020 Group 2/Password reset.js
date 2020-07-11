function solution(input = []) {
  let str = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "TakeOdd") {
      str = str
        .split("")
        .filter((el, i) => i % 2 !== 0)
        .join("");
      console.log(str);
    } else if (command === "Cut") {
      let index = +line[1];
      let length = +line[2];
      let first = str.substring(0, index);
      let second = str.substring(index + length);
      str = first + second;
      console.log(str);
    } else if (command === "Substitute") {
      let part = line[1];
      let substitution = line[2];
      if (!str.includes(part)) {
        console.log("Nothing to replace!");
        continue;
      }
      while (str.includes(part)) {
        str = str.replace(part, substitution);
      }
      console.log(str);
    } else if (command === "Done") {
      console.log(`Your password is: ${str}`);
    }
  }
}
solution([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
