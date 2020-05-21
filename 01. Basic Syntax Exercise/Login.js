function login(array) {
  const name = array.shift();
  const password = function (word) {
    const splitWord = word.split("");
    const reversed = splitWord.reverse().join("");
    return reversed;
  };
  for (let i = 0; i < array.length; i++) {
    if (name == password(array[i])) {
      console.log(`User ${name} logged in.`);
      break;
    } else {
      if (i == 3) {
        console.log(`User ${name} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}
