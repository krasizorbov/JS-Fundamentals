function palindrome(array) {
  for (let i = 0; i < array.length; i++) {
    let numToString = array[i].toString();
    let reversedString = numToString.split("").reverse().join("");
    if (numToString === reversedString) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindrome([123, 323, 421, 121]);
