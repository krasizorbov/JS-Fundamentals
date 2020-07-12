function solution(input = []) {
  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(/:\s+/g);
    let command = line[0];
    if (command === "New follower") {
      let name = line[1];
      if (!map.has(name)) {
        let arr = [0, 0];
        map.set(name, arr);
      }
    } else if (command === "Like") {
      let name = line[1];
      let count = +line[2];
      if (!map.has(name)) {
        let arr = [count, 0];
        map.set(name, arr);
      } else {
        let current = map.get(name);
        current[0] += count;
      }
    } else if (command === "Comment") {
      let name = line[1];
      if (!map.has(name)) {
        let arr = [0, 1];
        map.set(name, arr);
      } else {
        let current = map.get(name);
        current[1] += 1;
      }
    } else if (command === "Blocked") {
      let name = line[1];
      if (!map.has(name)) {
        console.log(`${name} doesn't exist.`);
      } else {
        map.delete(name);
      }
    } else if (command === "Log out") {
      break;
    }
  }
  map = new Map(
    [...map.entries()].sort(
      (a, b) => sortByLikesCount(a, b) || sortByName(a, b)
    )
  );
  console.log(`${map.size} followers`);
  for (const m of map) {
    console.log(`${m[0]}: ${m[1][0] + m[1][1]}`);
  }
  function sortByLikesCount(a, b) {
    return b[1][0] - a[1][0];
  }
  function sortByName(a, b) {
    return a[0].localeCompare(b[0]);
  }
}
solution([
  "New follower: gosho",
  "Like: gosho: 5",
  "Comment: gosho",
  "New follower: gosho",
  "New follower: tosho",
  "Comment: gosho",
  "Like: pesho: 10",
  "Comment: tosho",
  "Comment: pesho",
  "Log out",
]);
