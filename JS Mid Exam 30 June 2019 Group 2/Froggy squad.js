function froggySquad(input = []) {
  let result = input.shift().split(" ");
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    if (command === "Join") {
      let name = commands[1];
      result.push(name);
    } else if (command === "Jump") {
      let name = commands[1];
      let index = +commands[2];
      if (index >= 0 && index < result.length) {
        result.splice(index, 0, name);
      }
    } else if (command === "Dive") {
      let index = +commands[1];
      if (index >= 0 && index < result.length) {
        result.splice(index, 1);
      }
    } else if (command === "First") {
      let count = +commands[1];
      let newArray = [];
      if (count < result.length) {
        newArray = result.slice(0, count);
        console.log(newArray.join(" "));
      } else {
        console.log(result.join(" "));
      }
    } else if (command === "Last") {
      let count = +commands[1];
      let newArray = [];
      if (count < result.length) {
        newArray = result.slice(result.length - count);
        console.log(newArray.join(" "));
      } else {
        console.log(result.join(" "));
      }
    } else if (command === "Print") {
      let order = commands[1];
      if (order === "Normal") {
        console.log(`Frogs: ${result.join(" ")}`);
        break;
      } else if (order === "Reversed") {
        console.log(`Frogs: ${result.reverse().join(" ")}`);
        break;
      }
    }
  }
}
froggySquad([
  "A B C D E F",
  "Join G",
  "Jump Q 3",
  "Last 3",
  "Dive 2",
  "Print Normal",
]);
