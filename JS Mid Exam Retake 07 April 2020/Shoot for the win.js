function shootForTheWin(input = []) {
  let count = 0;
  let result = input.shift().split(" ").map(Number);
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "End") {
      console.log(`Shot targets: ${count} -> ${result.join(" ")}`);
    }
    let index = +input[i];
    if (index >= 0 && index < result.length) {
      for (let j = 0; j < result.length; j++) {
        let num = result[index];
        if (j !== index && result[j] !== -1) {
          if (result[j] > num) {
            result[j] -= num;
          } else if (result[j] <= num) {
            result[j] += num;
          }
        }
      }
      result[index] = -1;
      count++;
    }
  }
}
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
