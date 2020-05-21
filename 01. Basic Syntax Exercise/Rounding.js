function rounding(number, roundingNumber) {
  if (roundingNumber > 15) {
    roundingNumber = 15;
  }
  let newNumber = number.toFixed(roundingNumber).toString();
  console.log(parseFloat(newNumber));
}

rounding(10.5, 3);
