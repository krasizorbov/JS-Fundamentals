function solution(input = []) {
  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    let word = input[i];
    if (word === input[i]) {
      if (!map.has(word)) {
        map.set(word, 1);
      } else {
        let currentCount = map.get(word);
        let newCount = currentCount + 1;
        map.set(word, newCount);
      }
    }
  }
  map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  for (const entries of map) {
    console.log(`${entries[0]} -> ${entries[1]} times`);
  }
}
solution([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
