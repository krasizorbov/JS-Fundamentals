function gladiatorInventory(array = []) {
  let result = array
    .shift()
    .split(" ")
    .map((a) => a);
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    if (command[0] === "Buy") {
      if (!result.includes(command[1])) {
        result.push(command[1]);
      }
    }
    if (command[0] === "Trash") {
      if (result.includes(command[1])) {
        let index = result.indexOf(command[1]);
        result.splice(index, 1);
      }
    }
    if (command[0] === "Repair") {
      if (result.includes(command[1])) {
        let index = result.indexOf(command[1]);
        let element = result.splice(index, 1);
        result.push(element);
      }
    }
    if (command[0] === "Upgrade") {
      let splitString = command[1].split("-");
      let equipment = splitString[0];
      let upgrade = splitString[1];
      if (result.includes(equipment)) {
        let index = result.indexOf(equipment);
        let equipmentUpgrade = equipment + ":" + upgrade;
        result.splice(index + 1, 0, equipmentUpgrade);
      }
    }
  }
  console.log(result.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
