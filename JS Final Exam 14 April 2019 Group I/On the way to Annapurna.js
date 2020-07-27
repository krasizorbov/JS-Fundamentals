function solution(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "END") {
      break;
    }
    let line = input[i].split("->");
    let command = line[0];
    let name = line[1];
    if (command === "Add") {
      let items = line[2].split(",");
      if (!result.hasOwnProperty(name)) {
        result[name] = [];
        result[name].push(...items);
      } else {
        result[name].push(...items);
      }
    } else if (command === "Remove") {
      if (result.hasOwnProperty(name)) {
        delete result[name];
      }
    }
  }
  let sorted = Object.entries(result).sort(
    (a, b) => b[1].length - a[1].length || b[0].localeCompare(a[0])
  );
  console.log("Stores list:");
  for (const store of sorted) {
    console.log(store[0]);
    store[1].forEach((el) => console.log(`<<${el}>>`));
  }
}
solution([
  "Add->PeakSports->Map,Navigation,Compass",
  "Add->Paragon->Sunscreen",
  "Add->Groceries->Dried-fruit,Nuts",
  "Add->Groceries->Nuts",
  "Add->Paragon->Tent",
  "Remove->Paragon",
  "Add->Pharmacy->Pain-killers",
  "END",
]);
