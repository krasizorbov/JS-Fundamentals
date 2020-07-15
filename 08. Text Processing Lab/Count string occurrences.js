function solution(text, word) {
  let count = 0;
  let resultText = text.split(" ");
  for (let i = 0; i < resultText.length; i++) {
    if (resultText[i] === word) {
      count++;
    }
  }
  console.log(count);
}
solution("This is a word and it also is a sentence", "is");
