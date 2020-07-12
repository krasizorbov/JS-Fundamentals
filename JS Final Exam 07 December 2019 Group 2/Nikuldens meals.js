function solution(input = []) {
  let meals = new Map();
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split("-");
    let command = line[0];
    if (command === "Like") {
      let guest = line[1];
      let meal = line[2];
      if (!meals.has(guest)) {
        meals.set(guest, []);
        let current = meals.get(guest);
        current.push(meal);
      } else {
        let current = meals.get(guest);
        if (!current.includes(meal)) {
          current.push(meal);
        }
      }
    } else if (command === "Unlike") {
      let guest = line[1];
      let meal = line[2];
      if (!meals.has(guest)) {
        console.log(`${guest} is not at the party.`);
      } else {
        let current = meals.get(guest);
        if (!current.includes(meal)) {
          console.log(
            `${guest} doesn't have the ${meal} in his/her collection.`
          );
        } else {
          let current = meals.get(guest);
          let index = current.indexOf(meal);
          current.splice(index, 1);
          count++;
          console.log(`${guest} doesn't like the ${meal}.`);
        }
      }
    }
  }
  meals = new Map(
    [...meals.entries()].sort((a, b) => sortByCount(a, b) || sortByName(a, b))
  );
  for (const meal of meals) {
    console.log(`${meal[0]}: ${meal[1].join(", ")}`);
  }
  console.log(`Unliked meals: ${count}`);

  function sortByCount(a, b) {
    return b[1].length - a[1].length;
  }
  function sortByName(a, b) {
    return a[0].localeCompare(b[0]);
  }
}
solution([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Misho-salad",
  "Like-Pena-dessert",
  "Stop",
]);
