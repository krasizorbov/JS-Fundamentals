function solution(input = []) {
  let count = input.shift();
  let pattern = /\|[A-Z]{4,}\|:#[A-Za-z]+\s[A-Za-z]+#/;
  for (let i = 0; i < count; i++) {
    let result = input[i].match(pattern);
    if (result !== null) {
      let [name, position] = input[i].split(":");
      name = name.replace("|", "").replace("|", "");
      position = position.replace("#", "").replace("#", "");
      console.log(`${name}, The ${position}`);
      console.log(`>> Strength: ${name.length}`);
      console.log(`>> Armour: ${position.length}`);
    } else {
      console.log("Access denied!");
    }
  }
}
solution([
  "3",
  "|GEORGI|:#Lead architect#",
  "|Hristo|:#High Overseer#",
  "|STEFAN|:#Assistant Game Developer#",
]);
