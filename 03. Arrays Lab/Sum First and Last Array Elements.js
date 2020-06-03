function sumFirstAndLast(array = []) {
  let input = array.slice();
  let first = Number(input.shift());
  let last = Number(input.pop());
  let result = first + last;
  console.log(result);
}
sumFirstAndLast(["20", "30", "40"]);
