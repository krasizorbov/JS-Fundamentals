function passwordGenerator(input = []) {
  //A, E, I, O, U
  let first = input.shift();
  let second = input.shift();
  let word = first.concat(second).split("");
  let pattern = input.shift().toUpperCase();
  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (
        word[j] === "a" ||
        word[j] === "e" ||
        word[j] === "i" ||
        word[j] === "o" ||
        word[j] === "u"
      ) {
        word.splice(j, 1, pattern[i]);
        i++;
        if (i === pattern.length) {
          i = 0;
        }
      }
    }
  }

  console.log(`Your generated password is ${word.reverse().join("")}`);
}
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
