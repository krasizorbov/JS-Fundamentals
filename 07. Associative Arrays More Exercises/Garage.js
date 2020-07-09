function solution(input = []) {
  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" - ");
    let garageNumber = +line[0];
    let str = line[1].replace(/:/g, " -");
    if (!map.has(garageNumber)) {
      map.set(garageNumber, []);
      map.get(garageNumber).push(str);
    } else {
      map.get(garageNumber).push(str);
    }
  }
  for (const entries of map) {
    console.log(`Garage № ${entries[0]}`);
    entries[1].forEach((el) => console.log(`--- ${el}`));
  }
}
solution([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
  "2 - fuel type: petrol",
]);
