function solution(input = []) {
  let nums = input.shift().split(" ").map(Number);
  let pattern = /\&(.+)\&[^<]*\<(.+)\>/;
  let currentPosition = 0;
  let start = nums.length;
  for (const line of input) {
    let end = line.length;
    let str = "";
    for (let i = start; i < end; i++) {
      nums.push(nums[currentPosition]);
      currentPosition++;
    }
    for (let i = 0; i < line.length; i++) {
      str = str + String.fromCharCode(line[i].charCodeAt(0) - nums[i]);
    }
    let result = str.match(pattern);
    if (result !== null) {
      console.log(`Found ${result[1]} at ${result[2]}`);
    }
  }
}
solution([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
