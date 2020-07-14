function solution(input = []) {
  let count = input.shift();
  let pattern = /(\*|@)([A-Z][a-z]{2,})\1:\s\[([A-Za-z]+)\]\|\[([A-Za-z]+)\]\|\[([A-Za-z]+)\]\|$/;
  for (let i = 0; i < count; i++) {
    let result = input[i].match(pattern);
    if (result === null) {
      console.log("Valid message not found!");
    } else {
      let first = result[3].charCodeAt(0);
      let second = result[4].charCodeAt(0);
      let third = result[5].charCodeAt(0);
      console.log(`${result[2]}: ${first} ${second} ${third}`);
    }
  }
}
solution([
  "3",
  "*Request*: [I]|[s]|[i]|",
  "*Taggy@: [73]|[73]|[73]|",
  "Should be valid @Taggy@: [v]|[a]|[l]|",
]);
