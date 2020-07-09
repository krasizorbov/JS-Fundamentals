function solution(input = []) {
  let towns = new Map();
  while (true) {
    let line = input.shift().split("||");
    let town = line[0];
    if (town === "Sail") {
      break;
    }
    let population = +line[1];
    let gold = +line[2];
    if (!towns.has(town)) {
      let obj = { population: population, gold: gold };
      towns.set(town, obj);
    } else {
      let current = towns.get(town);
      current.population += population;
      current.gold += gold;
    }
  }
  while (true) {
    let line = input.shift().split("=>");
    let command = line[0];
    if (command === "End") {
      break;
    }
    if (command === "Plunder") {
      let town = line[1];
      let people = +line[2];
      let gold = +line[3];
      let current = towns.get(town);
      current.population -= people;
      current.gold -= gold;
      if (current.population >= 0 || current.gold >= 0) {
        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
        if (current.population <= 0 || current.gold <= 0) {
          console.log(`${town} has been wiped off the map!`);
          towns.delete(town);
        }
      } else {
        console.log(`${town} has been wiped off the map!`);
        towns.delete(town);
      }
    } else if (command === "Prosper") {
      let town = line[1];
      let gold = +line[2];
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        let current = towns.get(town);
        current.gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${current.gold} gold.`
        );
      }
    }
  }
  if (towns.size > 0) {
    console.log(
      `Ahoy, Captain! There are ${towns.size} wealthy settlements to go to:`
    );
    towns = new Map(
      [...towns.entries()].sort(
        (a, b) => sortByGold(a, b) || sortByTownName(a, b)
      )
    );
    for (const entries of towns) {
      console.log(
        `${entries[0]} -> Population: ${entries[1].population} citizens, Gold: ${entries[1].gold} kg`
      );
    }
  }
  function sortByGold(a, b) {
    return b[1].gold - a[1].gold;
  }
  function sortByTownName(a, b) {
    return a[0].localeCompare(b[0]);
  }
}
solution([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
