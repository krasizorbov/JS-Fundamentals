function merge(array1 = [], array2 = []) {
  let result = [];
  array1.map((x, i) => {
    i % 2 === 0
      ? result.push(Number(x) + Number(array2[i]))
      : result.push(x + array2[i]);
  });
  console.log(result.join(" - "));
}
merge(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
