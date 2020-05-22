function sortNumbers(num1, num2, num3) {
  let array = [num1, num2, num3];
  array.sort(function (a, b) {
    return b - a;
  });
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
}
sortNumbers(2, 1, 3);
