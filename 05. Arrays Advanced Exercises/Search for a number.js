function searchNumber(array, nums) {
  let numsToTake = nums[0];
  let numsToDelete = nums[1];
  let numToFind = nums[2];
  let result = array.slice(0, numsToTake);
  result.splice(0, numsToDelete);
  let counter = 0;
  for (const num of result) {
    if (num === numToFind) {
      counter++;
    }
  }
  console.log(`Number ${numToFind} occurs ${counter} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
