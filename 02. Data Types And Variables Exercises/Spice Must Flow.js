function spices(amount) {
  let counter = 0;
  let sum = 0;
  if (amount >= 100) {
    while (amount >= 100) {
      counter++;
      sum += amount - 26;
      amount -= 10;
    }
    sum -= 26;
    console.log(`${counter}`);
    console.log(`${sum}`);
  } else {
    console.log(`0`);
    console.log(`0`);
  }
}
spices(111);
