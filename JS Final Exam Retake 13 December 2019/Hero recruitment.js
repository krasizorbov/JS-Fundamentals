function solution(input = []) {
  let heroes = new Map();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let command = line[0];
    if (command === "Enroll") {
      let name = line[1];
      if (!heroes.has(name)) {
        heroes.set(name, []);
      } else {
        console.log(`${name} is already enrolled.`);
      }
    } else if (command === "Learn") {
      let name = line[1];
      let spell = line[2];
      if (!heroes.has(name)) {
        console.log(`${name} doesn't exist.`);
      } else {
        let current = heroes.get(name);
        if (!current.includes(spell)) {
          current.push(spell);
        } else {
          console.log(`${name} has already learnt ${spell}.`);
        }
      }
    } else if (command === "Unlearn") {
      let name = line[1];
      let spell = line[2];
      if (!heroes.has(name)) {
        console.log(`${name} doesn't exist.`);
      } else {
        let current = heroes.get(name);
        if (!current.includes(spell)) {
          console.log(`${name} doesn't know ${spell}.`);
        } else {
          let current = heroes.get(name);
          let index = 0;
          for (let j = 0; j < current.length; j++) {
            if (current[j] === spell) {
              index = j;
              break;
            }
          }
          current.splice(index, 1);
        }
      }
    } else if (command === "End") {
      break;
    }
  }
  heroes = new Map(
    [...heroes.entries()].sort(
      (a, b) => sortBySpellCount(a, b) || sortByName(a, b)
    )
  );
  console.log("Heroes:");
  for (const heroe of heroes) {
    console.log(`== ${heroe[0]}: ${heroe[1].join(", ")}`);
  }
  function sortBySpellCount(a, b) {
    return b[1].length - a[1].length;
  }
  function sortByName(a, b) {
    return a[0].localeCompare(b[0]);
  }
}
solution([
  "Enroll Stefan",
  "Enroll Pesho",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stamat ItShouldNotWork",
  "Unlearn Gosho Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);
