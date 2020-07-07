function solution(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    let name = input[i].split(" ")[0];
    let grades = input[i].split(" ").slice(1).map(Number);
    if (!result.hasOwnProperty(name)) {
      result[name] = grades;
    } else {
      grades.forEach((x) => result[name].push(x));
    }
  }
  let map = new Map();
  for (const key in result) {
    let avg = result[key].reduce((a, c) => a + c, 0) / result[key].length;
    map.set(key, avg);
  }
  map = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
  for (const entries of map) {
    if (result.hasOwnProperty(entries[0])) {
      console.log(`${entries[0]}: ${result[entries[0]].join(", ")}`);
    }
  }
}
solution(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
