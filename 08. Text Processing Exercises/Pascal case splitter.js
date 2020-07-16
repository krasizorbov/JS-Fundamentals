function splitPascal(input) {
  let result = [];
  let word = "";
  for (let i = 0; i < input.length; i++) {
    word += input[i];
    if (i + 1 === input.length) {
      result.push(word);
      word = "";
      break;
    }
    if (input.charCodeAt(i + 1) >= 65 && input.charCodeAt(i + 1) <= 90) {
      result.push(word);
      word = "";
    }
  }
  console.log(result.join(", "));
}
splitPascal("SplitMeIfYouCanHaHaYouCantOrYouCan");
