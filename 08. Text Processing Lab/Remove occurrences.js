function solution(word, text) {
  while (text.includes(word)) {
    text = text.replace(word, "");
  }
  console.log(text);
}
solution("ice", "kicegiciceeb");
