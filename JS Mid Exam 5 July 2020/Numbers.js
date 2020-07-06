function solution(input) {
  let result = input.split(" ").map(Number);
  if (result.length === 1 || result.length === 0) {
    console.log("No");
    return;
  }
  let num = result[0];
  let isTrue = false;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === num) {
      continue;
    } else {
      isTrue = true;
      break;
    }
  }
  if (isTrue === false) {
    console.log("No");
    return;
  }
  let sum = result.reduce((a, c) => a + c, 0);
  let average = sum / result.length;
  let output = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i] > average.toFixed(2)) {
      output.push(result[i]);
    }
  }
  output.sort((a, b) => b - a);
  if (output.length > 5) {
    output = output.slice(0, 5);
  }

  console.log(output.join(" "));
}
solution("5 5");
