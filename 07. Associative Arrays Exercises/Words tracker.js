function wordsTracker(input = []) {
  let result = {};
  let words = input.shift().split(" ");
  for (let i = 0; i < words.length; i++) {
    result[words[i]] = 0;
  }
  for (let j = 0; j < input.length; j++) {
    if (result.hasOwnProperty(input[j])) {
      result[input[j]]++;
    }
  }
  let entries = Object.entries(result);

  for (const [key, value] of entries.sort((a, b) => b[1] - a[1])) {
    console.log(`${key} - ${value}`);
  }
}
wordsTracker([
  "this sentence",
  "In",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
