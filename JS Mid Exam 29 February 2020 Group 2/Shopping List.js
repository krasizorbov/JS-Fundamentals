function shopping(input) {
  let shoppingList = input.shift().split("!");
  let commands = input.shift();
  while (commands !== "Go Shopping!") {
    let data = commands.split(" ");
    let command = data[0];
    let item = data[1];
    let index = shoppingList.indexOf(item);
    switch (command) {
      case "Urgent":
        if (index < 0) {
          shoppingList.unshift(item);
        }
        break;
      case "Unnecessary":
        if (index >= 0) {
          shoppingList.splice(index, 1);
        }
        break;
      case "Correct":
        if (index >= 0) {
          if (shoppingList.includes(item)) {
            shoppingList[index] = data[2];
          }
        }
        break;
      case "Rearrange":
        if (index >= 0) {
          if (shoppingList.includes(item)) {
            shoppingList.splice(index, 1);
            shoppingList.push(item);
          }
        }
        break;
      default:
        break;
    }
    commands = input.shift();
  }
  console.log(shoppingList.join(", "));
}
