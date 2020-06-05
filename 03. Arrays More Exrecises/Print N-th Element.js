function printNthElement(array) {
  let num = Number(array.pop());
  let result = [];
  for (let i = 0; i < array.length; i += num) {
    result.push(array[i]);
  }
  console.log(result.join(" "));
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
