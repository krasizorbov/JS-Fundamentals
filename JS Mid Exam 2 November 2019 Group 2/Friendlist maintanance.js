function frienlistMaintanance(input = []) {
  let friends = input.shift().split(", ");
  let blackListed = [];
  let lostListed = [];
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    if (commands[0] === "Blacklist") {
      let name = commands[1];
      if (friends.includes(name)) {
        blackListed.push(name);
        let index = friends.indexOf(name);
        console.log(`${name} was blacklisted.`);
        friends[index] = "Blacklisted";
      } else {
        console.log(`${name} was not found.`);
      }
    } else if (commands[0] === "Error") {
      let index = +commands[1];
      if (index >= 0 && index < friends.length) {
        let name = friends[index];
        if (name !== "Blacklisted" && name !== "Lost") {
          let index = friends.indexOf(name);
          lostListed.push(name);
          console.log(`${name} was lost due to an error.`);
          friends[index] = "Lost";
        }
      }
    } else if (commands[0] === "Change") {
      let index = +commands[1];
      let newName = commands[2];
      if (index >= 0 && index < friends.length) {
        let currentName = friends[index];
        friends[index] = newName;
        console.log(`${currentName} changed his username to ${newName}.`);
      }
    } else if (commands[0] === "Report") {
      console.log(`Blacklisted names: ${blackListed.length}`);
      console.log(`Lost names: ${lostListed.length}`);
      console.log(`${friends.join(" ")}`);
    }
  }
}
frienlistMaintanance([
  "Mike, John, Eddie",
  "Blacklist Mike",
  "Error 0",
  "Error 1",
  "Change 2 Mike123",
  "Report",
]);
