function condensedArray(array = []) {
  let conArray = [];
  while (array.length > 1) {
    for (let i = 0; i < array.length - 1; i++) {
      conArray[i] = array[i] + array[i + 1];
    }
    array = conArray;
    conArray = [];
  }
  console.log(array.toString());
}
condensedArray([2, 10, 3]);
