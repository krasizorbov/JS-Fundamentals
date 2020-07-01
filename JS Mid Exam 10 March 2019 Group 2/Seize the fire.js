function solution(input = []) {
  let cells = input.shift().split("#");
  let water = +input[0];
  let result = [];
  let effort = 0;
  for (let i = 0; i < cells.length; i++) {
    let line = cells[i].split(" = ");
    let type = line[0];
    let level = +line[1];
    if (type === "High" && level >= 81 && level <= 125) {
      if (water >= level) {
        water -= level;
        result.push(level);
        effort += level * 0.25;
      }
    } else if (type === "Medium" && level >= 51 && level <= 80) {
      if (water >= level) {
        water -= level;
        result.push(level);
        effort += level * 0.25;
      }
    } else if (type === "Low" && level >= 1 && level <= 50) {
      if (water >= level) {
        water -= level;
        result.push(level);
        effort += level * 0.25;
      }
    }
  }
  let totalFire = 0;
  console.log("Cells:");
  for (let i = 0; i < result.length; i++) {
    console.log(` - ${result[i]}`);
    totalFire += result[i];
  }
  console.log(`Effort: ${effort.toFixed(2)}`);
  console.log(`Total Fire: ${totalFire}`);
}
solution([
  "High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77",
  "220",
]);
