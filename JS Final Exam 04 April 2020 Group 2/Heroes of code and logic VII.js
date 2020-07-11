function solution(input = []) {
  let count = +input.shift();
  let heroes = new Map();
  for (let i = 0; i < count; i++) {
    let line = input.shift().split(" ");
    let heroe = line[0];
    let hp = +line[1];
    let mp = +line[2];
    if (hp > 100) {
      hp = 100;
    }
    if (mp > 200) {
      mp = 200;
    }
    heroes.set(heroe, { hp: hp, mp: mp });
  }
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" - ");
    let command = line[0];
    if (command === "CastSpell") {
      let heroe = line[1];
      let mpNeeded = +line[2];
      let spell = line[3];
      if (heroes.has(heroe)) {
        let current = heroes.get(heroe);
        if (current.mp >= mpNeeded) {
          current.mp -= mpNeeded;
          console.log(
            `${heroe} has successfully cast ${spell} and now has ${current.mp} MP!`
          );
        } else {
          console.log(`${heroe} does not have enough MP to cast ${spell}!`);
        }
      }
    } else if (command === "TakeDamage") {
      let heroe = line[1];
      let damage = +line[2];
      let attacker = line[3];
      if (heroes.has(heroe)) {
        let current = heroes.get(heroe);
        if (current.hp - damage > 0) {
          current.hp -= damage;
          console.log(
            `${heroe} was hit for ${damage} HP by ${attacker} and now has ${current.hp} HP left!`
          );
        } else {
          console.log(`${heroe} has been killed by ${attacker}!`);
          heroes.delete(heroe);
        }
      }
    } else if (command === "Recharge") {
      let heroe = line[1];
      let amount = +line[2];
      if (heroes.has(heroe)) {
        let current = heroes.get(heroe);
        if (current.mp + amount <= 200) {
          current.mp += amount;
          console.log(`${heroe} recharged for ${amount} MP!`);
        } else {
          amount = 200 - current.mp;
          current.mp = 200;
          console.log(`${heroe} recharged for ${amount} MP!`);
        }
      }
    } else if (command === "Heal") {
      let heroe = line[1];
      let amount = +line[2];
      if (heroes.has(heroe)) {
        let current = heroes.get(heroe);
        if (current.hp + amount <= 100) {
          current.hp += amount;
          console.log(`${heroe} healed for ${amount} HP!`);
        } else {
          amount = 100 - current.hp;
          current.hp = 100;
          console.log(`${heroe} healed for ${amount} HP!`);
        }
      }
    } else if (command === "End") {
      break;
    }
  }
  heroes = new Map(
    [...heroes.entries()].sort((a, b) => sortByHP(a, b) || sortByName(a, b))
  );
  for (const heroe of heroes) {
    console.log(heroe[0]);
    console.log(`  HP: ${heroe[1].hp}`);
    console.log(`  MP: ${heroe[1].mp}`);
  }
  function sortByHP(a, b) {
    return b[1].hp - a[1].hp;
  }
  function sortByName(a, b) {
    return a[0].localeCompare(b[0]);
  }
}
solution([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
