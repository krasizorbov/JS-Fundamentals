function sorting(array = []) {
  let result = [];
  array.sort((a, b) => a - b);
  while (array.length > 0) {
    result.push(array.pop());
    result.push(array.shift());
  }
  console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
