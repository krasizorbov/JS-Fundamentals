function sumFirstLast(array = []) {
  let first = +array.shift();
  let last = +array.pop();
  let result = first + last;
  console.log(result);
}
sumFirstLast(["20", "30", "40"]);
