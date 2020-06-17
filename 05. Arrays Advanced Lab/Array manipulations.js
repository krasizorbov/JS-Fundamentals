function arrayManipulations(array = []) {
  let result = array.shift().split(" ").map(Number);
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    if (command[0] === "Add") {
      result.push(command[1]);
    } else if (command[0] === "Remove") {
      if (result.includes(+command[1])) {
        let index = result[command[1]];
        result.splice(index, 1);
      }
    } else if (command[0] === "RemoveAt") {
      result.splice(command[1], 1);
    } else if (command[0] === "Insert") {
      let number = command[1];
      let index = command[2];
      result.splice(index, 0, number);
    }
  }
  console.log(result.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
