function oddAndEvenSum(num) {
  let numToString = num.toString();
  let array = Array.from(numToString);
  let oddSum = oddSumFunction(array);
  let evenSum = evenSumFunction(array);
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  // calculates odd sum
  function oddSumFunction(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        sum += Number(array[i]);
      }
    }
    return sum;
  }
  // calculates even sum
  function evenSumFunction(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sum += Number(array[i]);
      }
    }
    return sum;
  }
}
oddAndEvenSum(1000435);
