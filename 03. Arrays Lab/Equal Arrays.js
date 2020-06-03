function equalArrays(arrayOne = [], arrayTwo = []) {
  let index = -1;
  let sum = 0;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] == arrayTwo[i]) {
      sum += Number(arrayOne[i]);
    } else {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  } else {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
