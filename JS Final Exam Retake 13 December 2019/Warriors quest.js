function solution(input = []) {
  let str = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "GladiatorStance") {
      str = str.toUpperCase();
      console.log(str);
    } else if (command === "DefensiveStance") {
      str = str.toLowerCase();
      console.log(str);
    } else if (command === "Dispel") {
      let index = +line[1];
      let letter = line[2];
      if (index >= 0 && index < str.length) {
        let first = str.substring(0, index);
        let second = str.substring(index + 1);
        str = first + letter + second;
        console.log("Success!");
      } else {
        console.log("Dispel too weak.");
      }
    } else if (command === "Target" && line[1] === "Change") {
      let sub1 = line[2];
      let sub2 = line[3];
      while (str.includes(sub1)) {
        str = str.replace(sub1, sub2);
      }
      console.log(str);
    } else if (command === "Target" && line[1] === "Remove") {
      let sub = line[2];
      while (str.includes(sub)) {
        str = str.replace(sub, "");
      }
      console.log(str);
    } else if (command === "For" && line[1] === "Azeroth") {
      break;
    } else {
      console.log("Command doesn't exist!");
    }
  }
}
solution([
  "fr1c710n",
  "GladiatorStance",
  "Dispel 2 I",
  "Dispel 4 T",
  "Dispel 6 O",
  "Dispel 5 I",
  "Dispel 10 I",
  "Target Change RICTION riction",
  "For Azeroth",
]);
