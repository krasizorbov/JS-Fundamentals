function maxSequence(array = []) {
  let resultCounter = [];
  let resultIndex = [];
  let startIndex = 0;
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      counter++;
      if (counter === 2) {
        startIndex = i;
      }
    } else {
      if (counter !== 1) {
        resultCounter.push(counter);
        resultIndex.push(startIndex);
      }
      counter = 1;
    }
  }
  let maxNumber = Math.max(...resultCounter);
  let index = resultCounter.indexOf(maxNumber);
  let result = resultIndex[index];
  let a = array.slice(result, result + maxNumber);
  console.log(a.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
