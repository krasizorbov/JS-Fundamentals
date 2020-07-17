function solution(input = []) {
  let str = input.shift();
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (!result.hasOwnProperty(str[i])) {
      result[str[i]] = [];
      result[str[i]].push(i);
    } else {
      result[str[i]].push(i);
    }
  }
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      console.log(`${key}:${result[key].join("/")}`);
    }
  }
}
solution(["abababa", ""]);
