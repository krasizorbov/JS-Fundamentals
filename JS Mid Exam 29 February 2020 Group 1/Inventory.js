function inventory(input) {
  let items = input.shift().split(", ");
  while (input.length > 0) {
    let commands = input.shift().split(" - ");
    let command = commands[0];
    let item = commands[1];
    if (command === "Collect") {
      if (!items.includes(item)) {
        items.push(item);
      }
    } else if (command === "Drop") {
      if (items.includes(item)) {
        let index = items.indexOf(item);
        items.splice(index, 1);
      }
    } else if (command === "Combine Items") {
      let itemArray = item.split(":");
      let existingItem = itemArray[0];
      let newItem = itemArray[1];
      if (items.includes(existingItem)) {
        let index = items.indexOf(existingItem);
        items.splice(index + 1, 0, newItem);
      }
    } else if (command === "Renew") {
      if (items.includes(item)) {
        let index = items.indexOf(item);
        let itemToMove = items.splice(index, 1);
        items.push(itemToMove);
      }
    }
  }
  console.log(items.join(", "));
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
