function muOnline(input) {
  let health = 100;
  let bitcoins = 0;
  let result = input.shift().split("|");

  for (let i = 0; i < result.length; i++) {
    let commands = result[i].split(" ");
    let command = commands[0];
    let number = +commands[1];
    if (command === "potion") {
      if (health + number >= 100) {
        let initialHealth = health;
        health = 100;
        console.log(`You healed for ${health - initialHealth} hp.`);
      } else {
        health += number;
        console.log(`You healed for ${number} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      bitcoins += number;
      console.log(`You found ${number} bitcoins.`);
    } else {
      health -= number;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}
muOnline(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
