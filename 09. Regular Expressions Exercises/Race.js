function race(input = []) {
  let names = input.shift().split(", ");
  let result = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "end of race") {
      break;
    }
    let regexName = /[A-Z[a-z]+/gm;
    let regexNumber = /\d/gm;
    let name = input[i].match(regexName).join("");
    let number = input[i]
      .match(regexNumber)
      .map((x) => Number(x))
      .reduce((a, c) => a + c, 0);
    if (names.includes(name)) {
      if (!result.hasOwnProperty(name)) {
        result[name] = number;
      } else {
        result[name] += number;
      }
    }
  }
  let entries = Object.entries(result);
  entries.sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${entries[0][0]}`);
  console.log(`2nd place: ${entries[1][0]}`);
  console.log(`3rd place: ${entries[2][0]}`);
}
