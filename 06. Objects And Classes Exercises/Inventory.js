function inventory(array = []) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let [name, level, items = []] = array[i].split(" / ");
    if (items.length > 0) {
      let newItems = items
        .split(", ")
        .map((x) => x)
        .sort();
      let player = {
        name: name,
        level: +level,
        items: newItems.join(", "),
      };
      result.push(player);
    } else {
      let player = { name: name, level: +level, items: items };
      result.push(player);
    }
  }
  let output = result.sort((a, b) => a.level - b.level);
  for (const x of output) {
    console.log(`Hero: ${x.name}`);
    console.log(`level => ${x.level}`);
    console.log(`items => ${x.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
