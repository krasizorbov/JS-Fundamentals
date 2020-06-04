function maxNumber(array = []) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let isBigger = false;
    let right = array.slice(i + 1);
    for (let j = 0; j < right.length; j++) {
      if (array[i] <= right[j]) {
        isBigger = true;
        break;
      }
    }
    if (isBigger === false) {
      result.push(array[i]);
    }
  }
  console.log(result.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17]);
