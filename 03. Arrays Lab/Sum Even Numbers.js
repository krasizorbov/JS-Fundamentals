function sumEvenNumbers(array = []) {
  let newArray = array.slice();
  for (let i = 0; i < array.length; i++) {
    newArray[i] = Number(array[i]);
  }
  let sum = 0;
  for (const number of newArray) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
