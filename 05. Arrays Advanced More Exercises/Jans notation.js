function jansNotation(array = []) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      result.push(array[i]);
    } else {
      if (result.length >= 2) {
        let first = result.pop();
        let second = result.pop();
        let operation = 0;
        if (array[i] === "-") {
          operation = second - first;
        } else if (array[i] === "+") {
          operation = second + first;
        } else if (array[i] === "/") {
          operation = second / first;
        } else if (array[i] === "*") {
          operation = second * first;
        }
        result.push(operation);
      } else if (result.length < 2) {
        console.log("Error: not enough operands!");
        return;
      }
    }
  }
  if (result.length >= 2) {
    console.log("Error: too many operands!");
  }
  if (result.length === 1) {
    console.log(result[0]);
  }
}
jansNotation([5, 3, 4, "*", "-"]);
