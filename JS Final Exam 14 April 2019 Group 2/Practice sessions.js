function solution(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "END") {
      break;
    }
    let line = input[i].split("->");
    let command = line[0];
    let road = line[1];
    let racer = line[2];
    if (command === "Add") {
      if (!result.hasOwnProperty(road)) {
        result[road] = [];
        result[road].push(racer);
      } else {
        result[road].push(racer);
      }
    } else if (command === "Move") {
      let nextRoad = line[3];
      if (result[road].includes(racer)) {
        result[nextRoad].push(racer);
        result[road] = result[road].filter((el) => el !== racer);
      }
    } else if (command === "Close") {
      if (result.hasOwnProperty(road)) {
        delete result[road];
      }
    }
  }
  console.log("Practice sessions:");
  let sorted = Object.entries(result).sort(
    (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])
  );
  for (const road of sorted) {
    console.log(`${road[0]}`);
    road[1].forEach((el) => console.log(`++${el}`));
  }
}
solution([
  "Add->Glencrutchery Road->Giacomo Agostini",
  "Add->Braddan->Geoff Duke",
  "Add->Peel road->Mike Hailwood",
  "Add->Glencrutchery Road->Guy Martin",
  "Move->Glencrutchery Road->Giacomo Agostini->Peel road",
  "Close->Braddan",
  "END",
]);
