function solution(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    let [name, telNumber] = input[i].split(" ");
    if (result.hasOwnProperty(name)) {
      result[name] = telNumber;
    } else {
      result[name] = telNumber;
    }
  }

  let entries = Object.entries(result);
  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
solution([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
