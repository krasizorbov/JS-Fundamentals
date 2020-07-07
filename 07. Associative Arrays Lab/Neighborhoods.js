function solution(input = []) {
  let houses = input.shift().split(", ");
  let map = new Map();
  for (let i = 0; i < houses.length; i++) {
    map.set(houses[i], []);
  }
  for (let i = 0; i < input.length; i++) {
    let [house, name] = input[i].split(" - ");
    if (houses.includes(house)) {
      map.get(house).push(name);
    }
  }

  map = new Map([...map.entries()].sort((a, b) => b[1].length - a[1].length));
  for (const entries of map) {
    console.log(`${entries[0]}: ${entries[1].length}`);
    entries[1].forEach((el) => console.log(`--${el}`));
  }
}
solution([
  "Abbey Street, Herald Street, Bright Mews, Krasi Street",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
