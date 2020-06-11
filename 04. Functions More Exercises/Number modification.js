function modifyNumber(n) {
  let numberToString = n.toString();
  let sum = 0;
  while (sum / numberToString.length < 5) {
    sum = 0;
    for (let i = 0; i < numberToString.length; i++) {
      let number = Number(numberToString[i]);
      sum += number;
    }
    if (sum / numberToString.length < 5) {
      numberToString += 9;
    }
  }
  console.log(numberToString);
}
modifyNumber(101);
