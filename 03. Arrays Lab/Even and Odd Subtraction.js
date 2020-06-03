function differenceEvenOddNumbers(array = []) {
  let newArray = array.slice();
  for (let i = 0; i < array.length; i++) {
    newArray[i] = Number(array[i]);
  }
  let evensum = 0;
  let oddsum = 0;
  for (const number of newArray) {
    if (number % 2 === 0) {
      evensum += number;
    } else {
      oddsum += number;
    }
  }
  console.log(evensum - oddsum);
}
