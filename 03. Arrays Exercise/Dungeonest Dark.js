function dungenDark(input) {
  let health = 100;
  let coins = 0;
  let array = input[0].split("|");
  for (let i = 0; i < array.length; i++) {
    let a = array[i].split(" ");
    if (a[0] === "potion") {
      let portionHealth = Number(a[1]);
      if (health + portionHealth > 100) {
        portionHealth = 100 - health;
        health = 100;
      } else {
        health += portionHealth;
      }
      console.log(`You healed for ${portionHealth} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (a[0] === "chest") {
      coins += Number(a[1]);
      console.log(`You found ${a[1]} coins.`);
    } else {
      health -= Number(a[1]);
      if (health > 0) {
        console.log(`You slayed ${a[0]}.`);
      } else {
        console.log(`You died! Killed by ${a[0]}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
dungenDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
