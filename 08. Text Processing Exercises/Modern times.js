function modernTimes(input) {
  let result = input.split(" ");
  function isValid(word) {
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {
      let valid = true;
      if (word[i].charCodeAt(i) < 65 || word[i].charCodeAt(i) > 90) {
        valid = false;
        return false;
      }
      return true;
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (
      result[i].startsWith("#") &&
      result[i].length > 1 &&
      isValid(result[i].substring(1)) === true
    ) {
      console.log(result[i].substring(1));
    }
  }
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
