function manowar(input = []) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealth = +input.shift();
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let command = commands[0];
    if (command === "Fire") {
      let index = +commands[1];
      let damage = +commands[2];
      if (index >= 0 && index < warShip.length) {
        warShip[index] -= damage;
        if (warShip[index] <= 0) {
          console.log(`You won! The enemy ship has sunken.`);
          break;
        }
      }
    } else if (command === "Defend") {
      let startIndex = +commands[1];
      let endIndex = +commands[2];
      let damage = +commands[3];
      if (
        startIndex >= 0 &&
        startIndex < pirateShip.length &&
        endIndex >= 0 &&
        endIndex < pirateShip.length
      ) {
        let isTrue = false;
        for (let j = startIndex; j <= endIndex; j++) {
          pirateShip[j] -= damage;
          if (pirateShip[j] <= 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            isTrue = true;
            break;
          }
        }
        if (isTrue === true) {
          break;
        }
      }
    } else if (command === "Repair") {
      let index = +commands[1];
      let health = +commands[2];
      if (index >= 0 && index < pirateShip.length) {
        pirateShip[index] += health;
        if (pirateShip[index] > maxHealth) {
          pirateShip[index] = maxHealth;
        }
      }
    } else if (command === "Status") {
      let lowerThan20 = maxHealth * 0.2;
      let counter = 0;
      for (let i = 0; i < pirateShip.length; i++) {
        if (pirateShip[i] < lowerThan20) {
          counter++;
        }
      }
      console.log(`${counter} sections need repair.`);
    } else if (command === "Retire") {
      let pirateShipSum = pirateShip.reduce((a, c) => a + c);
      let warShipSum = warShip.reduce((a, c) => a + c);
      console.log(`Pirate ship status: ${pirateShipSum}`);
      console.log(`Warship status: ${warShipSum}`);
      break;
    }
  }
}
manowar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
