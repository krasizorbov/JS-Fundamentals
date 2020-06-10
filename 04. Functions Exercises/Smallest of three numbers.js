function smallestNumber(a, b, c) {
  let array = [a, b, c];
  let result = Math.min(...array);
  return result;
}
console.log(smallestNumber(1, 2, 3));
