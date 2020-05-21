function mining(array) {
  let dayOfFirstPurchase = 0;
  let thirdDay = 0;
  let counter = 0;
  let sum = 0;
  let i = 0;
  for (i = 0; i < array.length; i++) {
    thirdDay++;
    if (thirdDay % 3 == 0 && i != 0) {
      sum += (array[i] - array[i] * 0.3) * 67.51;
    } else {
      sum += array[i] * 67.51;
    }
    if (sum / 11949.16 >= 1) {
      let j = Math.floor(sum / 11949.16);
      for (let index = 0; index < j; index++) {
        counter++;
        if (counter == 1) {
          dayOfFirstPurchase = i + 1;
        }
        sum -= 11949.16;
      }
    }
  }
  console.log(`Bought bitcoins: ${counter}`);
  if (counter != 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
  }
  console.log(`Left money: ${sum.toFixed(2)} lv.`);
}
mining([3124.15, 504.212, 2511.124]);
