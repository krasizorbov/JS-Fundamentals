function reverseAnArray(number, array = []) {
  let newArray = [];
  for (let i = 0; i < number; i++) {
    newArray.push(array[i]);
  }
  let reversedArray = newArray.reverse();
  console.log(reversedArray.join(" "));
}
reverseAnArray(3, [10, 20, 30, 40, 50]);
