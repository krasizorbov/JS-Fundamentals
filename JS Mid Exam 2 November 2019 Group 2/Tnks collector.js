function tanksCollector(input = []) {
  let tanks = input.shift().split(", ");
  let num = +input.shift();
  for (let i = 0; i < num; i++) {
    let commands = input[i].split(", ");
    if (commands[0] === "Add") {
      let name = commands[1];
      if (tanks.includes(name)) {
        console.log(`Tank is already bought`);
      } else {
        tanks.push(name);
        console.log(`Tank successfully bought`);
      }
    } else if (commands[0] == "Remove") {
      let name = commands[1];
      if (tanks.includes(name)) {
        let index = tanks.indexOf(name);
        tanks.splice(index, 1);
        console.log(`Tank successfully sold`);
      } else {
        console.log(`Tank not found`);
      }
    } else if (commands[0] === "Remove At") {
      let index = +commands[1];
      if (index >= 0 && index < tanks.length) {
        tanks.splice(index, 1);
        console.log(`Tank successfully sold`);
      } else {
        console.log(`Index out of range`);
      }
    } else if (commands[0] === "Insert") {
      let index = +commands[1];
      let name = commands[2];
      if (index >= 0 && index < tanks.length && !tanks.includes(name)) {
        tanks.splice(index, 0, name);
        console.log(`Tank successfully bought`);
      } else if (index >= 0 && index < tanks.length && tanks.includes(name)) {
        console.log(`Tank is already bought`);
      } else {
        console.log(`Index out of range`);
      }
    }
  }
  console.log(tanks.join(", "));
}
tanksCollector([
  "T-34-85 Rudy, SU-100Y, STG",
  "3",
  "Add, King Tiger(C)",
  "Insert, 2, IS-2M",
  "Remove, T-34-85 Rudy",
]);
