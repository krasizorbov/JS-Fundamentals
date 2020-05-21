function printSum(x, y) {
  let sum = 0;
  let s = "";
  for (let index = x; index <= y; index++) {
    sum += index;
    s += index + " ";
  }
  console.log(s);
  console.log(`Sum: ${sum}`);
}
printSum(5, 10);
