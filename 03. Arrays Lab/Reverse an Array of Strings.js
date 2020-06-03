function reverseAnArrayOfStrings(array = []) {
  let length = array.length;
  let a = reversedArray(length, array);
  console.log(a.join(" "));

  function reversedArray(length, array = []) {
    let newArray = [];
    for (let i = 0; i < length; i++) {
      newArray.push(array.pop());
    }
    return newArray;
  }
}
reverseAnArrayOfStrings(["a", "b", "c", "d", "e"]);
