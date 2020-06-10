function charactersInRange(a, b) {
  let firstNumber = a.charCodeAt(0);
  let secondNumber = b.charCodeAt(0);
  let result = print(firstNumber, secondNumber);
  console.log(result);
  // iterate from a to b if a < b and vice versa
  function print(a, b) {
    let array = [];
    if (a < b) {
      for (let i = a + 1; i < b; i++) {
        array.push(String.fromCharCode(i));
      }
    } else {
      for (let j = b + 1; j < a; j++) {
        array.push(String.fromCharCode(j));
      }
    }
    let result = array.join(" ");
    return result;
  }
}
charactersInRange("a", "d");
