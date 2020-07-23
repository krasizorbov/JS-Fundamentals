function solution(input = []) {
  let num = +input.shift();
  input.pop();
  let array = [];
  for (let i = 0; i < input.length; i++) {
    let str = "";
    for (let j = 0; j < input[i].length; j++) {
      str += String.fromCharCode(input[i][j].charCodeAt(0) - num);
    }
    array.push(str);
  }
  let pattern = /@([A-Za-z]+)[^@\-!:>]*!([G|N])!/;
  for (let i = 0; i < array.length; i++) {
    let result = array[i].match(pattern);
    if (result !== null) {
      let name = result[1];
      let behaviour = result[2];
      if (behaviour === "G") {
        console.log(name);
      }
    }
  }
}
solution([
  "3",
  "CNdwhamigyenumje$J$",
  "CEreelh-nmguuejn$J$",
  "CVwdq&gnmjkvng$Q$",
  "end",
]);
