function stringSubstring(str, input) {
  let output = input.toLowerCase().split(" ");
  let string = str.toLowerCase();
  let exists = false;
  for (let i = 0; i < output.length; i++) {
    if (output[i] === string) {
      console.log(str);
      exists = true;
      break;
    }
  }
  if (exists === false) {
    console.log(`${str} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
