function solution(input = []) {
  let treshold = 1;
  let digitPattern = /\d/gm;
  let digit = input.slice(0);
  digit = digit.shift().match(digitPattern);
  for (let i = 0; i < digit.length; i++) {
    treshold *= +digit[i];
  }
  console.log(`Cool threshold: ${treshold}`);
  let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/gm;
  let emoji = input.slice(0);
  emoji = emoji.shift().match(emojiPattern);
  let result = new Map();
  if (emoji !== null) {
    for (let i = 0; i < emoji.length; i++) {
      let sum = 0;
      let l = emoji[i].slice(0);
      for (let j = 0; j < l.length; j++) {
        if (
          (l[j].charCodeAt(0) >= 65 && l[j].charCodeAt(0) <= 90) ||
          (l[j].charCodeAt(0) >= 97 && l[j].charCodeAt(0) <= 122)
        ) {
          sum += l[j].charCodeAt(0);
        }
      }
      result.set(emoji[i], sum);
    }
  }
  if (result !== null) {
    console.log(`${emoji.length} emojis found in the text. The cool ones are:`);
    for (const r of result) {
      if (r[1] > treshold) {
        console.log(r[0]);
      }
    }
  }
}
solution([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
