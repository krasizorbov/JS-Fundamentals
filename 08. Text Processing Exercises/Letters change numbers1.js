function solve(strings) {
  strings = strings.split(/\s+/);
  let letterPosition;
  let sum = 0;
  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    let num = Number(str.substr(1, str.length - 2));
    let firstLetter = str[0];
    let lastLetter = str[str.length - 1];
    let upperCaseLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let lowerCaseLetters = Array.from("abcdefghijklmnopqrstuvwxyz");

    if (upperCaseLetters.includes(firstLetter)) {
      letterPosition = upperCaseLetters.indexOf(firstLetter) + 1;
      sum += num / letterPosition;
    } else if (lowerCaseLetters.includes(firstLetter)) {
      letterPosition = lowerCaseLetters.indexOf(firstLetter) + 1;
      sum += num * letterPosition;
    }

    if (upperCaseLetters.includes(lastLetter)) {
      letterPosition = upperCaseLetters.indexOf(lastLetter) + 1;
      sum -= letterPosition;
    } else if (lowerCaseLetters.includes(lastLetter)) {
      letterPosition = lowerCaseLetters.indexOf(lastLetter) + 1;
      sum += letterPosition;
    }
  }
  console.log(sum.toFixed(2));
}
