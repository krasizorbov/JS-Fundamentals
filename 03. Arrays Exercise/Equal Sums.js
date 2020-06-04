function equalSums(array = []) {
  if (array.length === 1) {
    console.log(0);
    return;
  }
  let isTrue = false;
  for (let i = 1; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += array[j];
    }
    for (let k = i + 1; k < array.length; k++) {
      rightSum += array[k];
    }
    if (leftSum === rightSum) {
      isTrue = true;
      console.log(i);
    }
  }
  if (isTrue !== true) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);
