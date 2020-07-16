function hardWords(input = []) {
  let words = input.pop();
  let result = input.pop();

  let startIndex = 0;
  let counter = 0;
  let isTrue = false;
  let word = "";
  for (let k = 0; k < result.length; k++) {
    if (result[k] === "_") {
      counter++;
      word += "_";
      isTrue = true;
    } else {
      if (isTrue === true) {
        isTrue = false;
        startIndex = k - counter + 1;
        for (let i = 0; i < words.length; i++) {
          if (words[i].length === counter) {
            str = result.substring(startIndex - 1, startIndex + counter - 1);
            result = result.replace(str, words[i]);
            break;
          }
        }
        counter = 0;
        isTrue = false;
        word = "";
      }
    }
  }

  console.log(result);
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
