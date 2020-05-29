function contactList(input = []) {
  let result = input.shift().split(" ");
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    if (command === "Add") {
      let name = commands[1];
      let index = +commands[2];
      if (result.includes(name) && index >= 0 && index < result.length) {
        result.splice(index, 0, name);
      } else if (!result.includes(name)) {
        result.push(name);
      }
    } else if (command === "Remove") {
      let index = +commands[1];
      if (index >= 0 && index < result.length) {
        result.splice(index, 1);
      }
    } else if (command === "Export") {
      let startIndex = +commands[1];
      let count = +commands[2];
      let resultArray = [];
      if (startIndex + count < result.length) {
        for (let j = startIndex; j < startIndex + count; j++) {
          resultArray.push(result[j]);
        }
        console.log(resultArray.join(" "));
      } else {
        for (let j = startIndex; j < result.length; j++) {
          resultArray.push(result[j]);
        }
        console.log(resultArray.join(" "));
      }
    } else if (command === "Print") {
      let order = commands[1];
      if (order === "Normal") {
        console.log(`Contacts: ${result.join(" ")}`);
        break;
      } else {
        console.log(`Contacts: ${result.reverse().join(" ")}`);
        break;
      }
    }
  }
}
contactList([
  "Alisson Bellamy Candace Tristan",
  "Remove 3",
  "Add Bellamy 2",
  "Print Normal",
]);
