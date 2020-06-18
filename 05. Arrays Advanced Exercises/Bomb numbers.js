function bombNumbers(arr = [], bomb = []) {
  let num = bomb.shift();
  let power = bomb.shift();
  let array = arr.splice(0);
  if (power === 0) {
    let bombIndex = array.indexOf(num);
    array.splice(bombIndex, 1);
  }
  while (array.includes(num)) {
    let bombIndex = array.indexOf(num);
    let startIndex = Math.max(bombIndex - power, 0);
    array.splice(bombIndex, power + 1);
    array.splice(startIndex, power);
  }
  let result = array.reduce((a, c) => (a += c), 0);
  console.log(result);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
