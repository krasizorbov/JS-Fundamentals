function solution(text, word) {
  let replacement = "*".repeat(word.length);
  while (text.includes(word)) {
    text = text.replace(word, replacement);
  }
  console.log(text);
}
solution("A small sentence with some words", "small");
