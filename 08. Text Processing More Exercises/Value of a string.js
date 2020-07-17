function solution(input = []) {
  let str = input.shift();
  let sum = 0;
  if (input[0] === "UPPERCASE") {
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
        sum += str[i].charCodeAt(0);
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
        sum += str[i].charCodeAt(0);
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
solution(["HelloFromMyAwesomePROGRAM", "LOWERCASE", ""]);
