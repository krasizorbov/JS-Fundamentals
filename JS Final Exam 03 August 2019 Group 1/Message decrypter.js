function solution(input = []) {
  let pattern = /^(\$|%)([A-Z][a-z]{2,})\1:\s\[([0-9]+)\]\|\[([0-9]+)\]\|\[([0-9]+)\]\|$/;
  let count = input.shift();
  for (let i = 0; i < count; i++) {
    let result = input[i].match(pattern);
    if (result === null) {
      console.log("Valid message not found!");
    } else {
      let first = String.fromCharCode(+result[3]);
      let second = String.fromCharCode(+result[4]);
      let third = String.fromCharCode(+result[5]);
      console.log(`${result[2]}: ${first}${second}${third}`);
    }
  }
}
solution([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);
