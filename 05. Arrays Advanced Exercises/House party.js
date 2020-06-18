function houseParty(array = []) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let string = array[i].split(" ");
    let name = string[0];
    if (!result.includes(name) && string[2] === "going!") {
      result.push(name);
      continue;
    } else if (result.includes(name) && string[2] === "not") {
      let index = result.indexOf(name);
      result.splice(index, 1);
      continue;
    } else if (result.includes(name) && string[2] === "going!") {
      console.log(`${name} is already in the list!`);
      continue;
    } else if (!result.includes(name) && string[2] === "not") {
      console.log(`${name} is not in the list!`);
      continue;
    }
  }
  console.log(result.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
