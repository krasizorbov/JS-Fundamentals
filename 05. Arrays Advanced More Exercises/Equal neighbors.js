function equalNeighbors(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i >= 0 && i + 1 < array.length) {
        if (array[i][j] === array[i + 1][j]) {
          counter++;
        }
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (j >= 0 && j + 1 < array[i].length) {
        if (array[i][j] === array[i][j + 1]) {
          counter++;
        }
      }
    }
  }
  console.log(counter);
}
equalNeighbors([
  ["yes", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
