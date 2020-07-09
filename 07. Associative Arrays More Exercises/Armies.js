function solution(input = []) {
  let data = new Map();
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("arrives")) {
      let leader = input[i].replace(" arrives", "");
      data.set(leader, []);
    } else if (input[i].includes(":")) {
      let line = input[i].split(": ");
      let leader = line[0];
      let str = line[1].split(", ");
      let army = str[0];
      let count = +str[1];
      let obj = { armyName: army, count: count };
      if (data.has(leader)) {
        data.get(leader).push(obj);
      }
    } else if (input[i].includes("+")) {
      let [army, count] = input[i].split(" + ");
      for (const d of data) {
        d[1].forEach((obj) => {
          if (obj["armyName"] === army) {
            obj.count += +count;
          }
        });
      }
    } else if (input[i].includes("defeated")) {
      let leader = input[i].replace(" defeated", "");
      if (data.has(leader)) {
        data.delete(leader);
      }
    }
  }
  let namesAndTotalCount = new Map();
  for (const d of data) {
    let sum = 0;
    d[1].forEach((obj) => {
      sum += obj.count;
    });
    namesAndTotalCount.set(d[0], sum);
  }
  namesAndTotalCount = new Map(
    [...namesAndTotalCount.entries()].sort((a, b) => b[1] - a[1])
  );
  for (const entries of namesAndTotalCount) {
    console.log(`${entries[0]}: ${entries[1]}`);
    for (const d of data) {
      if (d[0] === entries[0]) {
        d[1].sort((a, b) => b.count - a.count);
        for (const obj of d[1]) {
          console.log(`>>> ${obj.armyName} - ${obj.count}`);
        }
      }
    }
  }
}
solution([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
