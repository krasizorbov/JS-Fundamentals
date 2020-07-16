function cutAndReverse(input) {
  let index = input.length / 2;
  let firstHalf = input.substring(0, index).split("").reverse().join("");
  let secondHalf = input.substring(index).split("").reverse().join("");
  console.log(firstHalf);
  console.log(secondHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
