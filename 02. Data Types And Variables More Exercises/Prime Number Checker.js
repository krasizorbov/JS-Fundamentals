function prime(number) {
  if (number !== 1) {
    if (number % 2 !== 0 && number % 3 !== 0) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
