function lastKnumbers(n, k) {
  let array = [1];
  for (let i = 1; i < n; i++) {
    let startIndex = Math.max(i - k, 0);
    let currentElement = array
      .slice(startIndex, startIndex + k)
      .reduce((a, c) => a + c);
    array.push(currentElement);
  }
  console.log(array.join(" "));
}
lastKnumbers(6, 3);
