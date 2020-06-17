function firstAndLastKnumbers(array = []) {
  let k = array.shift();
  let first = array.slice(0, k);
  let last = array.slice(array.length - k, array.length);
  console.log(first.join(" "));
  console.log(last.join(" "));
}
firstAndLastKnumbers([2, 7, 8, 9]);
