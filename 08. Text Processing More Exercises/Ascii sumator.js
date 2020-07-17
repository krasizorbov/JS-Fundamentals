function solution(input = []) {
  let sum = 0;
  let first = input.shift().charCodeAt(0);
  let second = input.shift().charCodeAt(0);
  let str = input.shift();
  let start = Math.min(first, second);
  let end = Math.max(first, second);

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) > start && str[i].charCodeAt(0) < end) {
      sum += str[i].charCodeAt(0);
    }
  }
  console.log(sum);
}
solution([".", "@", "dsg12gr5653feee5"]);
