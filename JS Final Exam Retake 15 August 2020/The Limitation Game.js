function solution(input = []) {
  let result = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split("|");
    let command = line[0];
    if (command === "Move") {
      let n = +line[1];
      let first = result.substring(0, n);
      let second = result.substring(n);
      result = second + first;
    } else if (command === "Insert") {
      let index = +line[1];
      let sub = line[2];
      let first = result.substring(0, index);
      let second = result.substring(index);
      result = first + sub + second;
    } else if (command === "ChangeAll") {
      let sub = line[1];
      let replacement = line[2];
      while (result.includes(sub)) {
        result = result.replace(sub, replacement);
      }
    } else if (command === "Decode") {
      break;
    }
  }
  console.log(`The decrypted message is: ${result}`);
}
solution([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
