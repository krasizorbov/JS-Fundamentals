function addOrSubstruct(input = []) {
  let result = [];
  input.map((x, i) => {
    x % 2 === 0 ? (x += i) : (x -= i);
    result.push(x);
  });
  console.log(result);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(input.reduce(reducer));
  console.log(result.reduce(reducer));
}
addOrSubstruct([5, 15, 23, 56, 35]);
