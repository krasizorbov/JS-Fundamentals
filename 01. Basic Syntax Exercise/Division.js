function division(number) {
  let devider = 0;
  if (number % 2 == 0) {
    devider = 2;
  }
  if (number % 3 == 0) {
    devider = 3;
  }
  if (number % 6 == 0) {
    devider = 6;
  }
  if (number % 7 == 0) {
    devider = 7;
  }
  if (number % 10 == 0) {
    devider = 10;
  }
  // final check
  if (devider == 0) {
    console.log("Not divisible");
  } else {
    console.log(`The number is divisible by ${devider}`);
  }
}

division(15);
