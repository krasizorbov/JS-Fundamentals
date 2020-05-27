function specialNumber(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let j = i;
    while (j > 0) {
      let currentNumber = j % 10;
      sum += currentNumber;
      j = parseInt(j / 10);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
specialNumber(15);
