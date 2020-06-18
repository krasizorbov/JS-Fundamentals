function train(array = []) {
  let result = array.shift().split(" ").map(Number);
  let maxCapacity = array.shift().split(" ").map(Number);
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    if (command[0] === "Add") {
      result.push(+command[1]);
    } else {
      for (let j = 0; j < result.length; j++) {
        if (result[j] + Number(command[0]) <= maxCapacity) {
          result[j] += Number(command[0]);
          break;
        }
      }
    }
  }
  console.log(result.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
