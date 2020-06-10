function addAndSubtract(a, b, c) {
  let sumofTwo = sum(a, b);
  let result = subtract(sumofTwo, c);
  console.log(result);
  function sum(a, b) {
    return a + b;
  }
  function subtract(c, d) {
    return c - d;
  }
}
addAndSubtract(1, 2, 3);
