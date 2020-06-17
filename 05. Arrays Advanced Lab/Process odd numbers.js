function processOddNumbers(input) {
  let array = [];
  array = input
    .filter((num, index) => index % 2 == 1)
    .map((num) => num * 2)
    .reverse();
  console.log(array.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
