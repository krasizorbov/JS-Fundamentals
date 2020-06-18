function distinctArray(array = []) {
  let result = array.slice();
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        counter++;
      }
      if (counter > 1) {
        result.splice(j, 1);
        j--;
        counter--;
      }
    }
    counter = 0;
  }
  console.log(result.join(" "));
}
distinctArray([1, 1, 2, 3, 4, 4]);
