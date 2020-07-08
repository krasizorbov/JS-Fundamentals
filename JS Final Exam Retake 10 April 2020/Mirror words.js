function solution(input = []) {
  let result = [];
  let str = input.shift();
  let pattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/gm;
  let array = str.match(pattern);
  if (array !== null) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes("##")) {
        let line = array[i].split("##");
        line[0] = line[0].substring(1);
        line[1] = line[1].substring(0, line[1].length - 1);
        let reversed = line[1].split("").reverse().join("");
        if (reversed === line[0]) {
          let output = line[0] + " <=> " + line[1];
          result.push(output);
        }
      }
      if (array[i].includes("@@")) {
        let line = array[i].split("@@");
        line[0] = line[0].substring(1);
        line[1] = line[1].substring(0, line[1].length - 1);
        let reversed = line[1].split("").reverse().join("");
        if (reversed === line[0]) {
          let output = line[0] + " <=> " + line[1];
          result.push(output);
        }
      }
    }
  }
  if (array === null) {
    console.log("No word pairs found!");
  } else {
    console.log(`${array.length} word pairs found!`);
  }
  if (result.length > 0) {
    console.log("The mirror words are:");
    console.log(result.join(", "));
  } else {
    console.log("No mirror words!");
  }
}
solution(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
