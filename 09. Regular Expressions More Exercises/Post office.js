function solution(input = []) {
  let str = input.shift().split("|");
  let first = str[0];
  let second = str[1];
  let third = str[2];
  let firstPattern = /([#$%*&])([A-Z]+)\1/;
  let secondPattern = /[0-9]+:[0-9][0-9]/g;
  let thirdPattern = /\b[A-Z][a-z\S]+\b/g;
  let result1 = first.match(firstPattern);
  let result2 = second.match(secondPattern);
  let result3 = third.match(thirdPattern);
  if (result1 !== null && result2 !== null && result3 !== null) {
    let letters = result1[2].split("");
    let digits = {};
    for (let i = 0; i < result2.length; i++) {
      let line = result2[i].split(":");
      let firstLetter = String.fromCharCode(+line[0]);
      let count = 0;
      if (line[1].startsWith("0")) {
        count = +line[1][1];
        digits[firstLetter] = count;
      } else {
        count = +line[1];
        digits[firstLetter] = count;
      }
    }
    for (let j = 0; j < letters.length; j++) {
      for (let i = 0; i < result3.length; i++) {
        let word = result3[i];
        let firstLetter = word[0];
        let count = word.length - 1;
        if (
          letters[j] === firstLetter &&
          digits.hasOwnProperty(firstLetter) &&
          digits[firstLetter] === count
        ) {
          console.log(word);
        }
      }
    }
  }
}
solution([
  'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig',
]);
