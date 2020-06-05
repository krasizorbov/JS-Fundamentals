function NonDecreasingSubsequence(array = []) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] > array[i + 1]) {
      array.splice(i + 1, 1);
      length = array.length;
      i--;
    }
  }
  console.log(array.join(" "));
}
NonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
