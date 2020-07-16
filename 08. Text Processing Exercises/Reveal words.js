function revealWords(str, input) {
  let result = input.split(" ");
  let string = str.split(", ");
  for (let i = 0; i < result.length; i++) {
    if (result[i].includes("*")) {
      for (let j = 0; j < string.length; j++) {
        if (result[i].length === string[j].length) {
          result[i] = string[j];
          break;
        }
      }
    }
  }
  console.log(result.join(" "));
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
