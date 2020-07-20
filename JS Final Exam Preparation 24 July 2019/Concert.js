function solution(input = []) {
  let band = input.pop();
  let bandsAndNames = {};
  let bandsAndTotalTime = {};
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split("; ");
    let command = line[0];
    if (command === "Add") {
      let bandname = line[1];
      let members = line[2].split(", ");
      if (!bandsAndNames.hasOwnProperty(bandname)) {
        bandsAndNames[bandname] = new Set();
        members.forEach((el) => bandsAndNames[bandname].add(el));
      } else {
        members.forEach((el) => bandsAndNames[bandname].add(el));
      }
    } else if (command === "Play") {
      let bandname = line[1];
      let hours = +line[2];
      if (!bandsAndTotalTime.hasOwnProperty(bandname)) {
        bandsAndTotalTime[bandname] = hours;
      } else {
        bandsAndTotalTime[bandname] += hours;
      }
    } else if (command === "start of concert") {
      break;
    }
  }
  let totalTime = Object.values(bandsAndTotalTime).reduce((a, c) => a + c, 0);
  console.log(`Total time: ${totalTime}`);
  let orderedBands = Object.entries(bandsAndTotalTime).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  for (const b of orderedBands) {
    console.log(`${b[0]} -> ${b[1]}`);
  }
  console.log(`${band}`);
  for (const b of Object.entries(bandsAndNames)) {
    if (b[0] === band) {
      b[1].forEach((el) => console.log(`=> ${el}`));
    }
  }
}
solution([
  "Play; The Beatles; 2584",
  "Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
  "Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner",
  "Play; Eagles; 1869",
  "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
  "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart",
  "Play; The Rolling Stones; 4239",
  "start of concert",
  "The Rolling Stones",
]);
