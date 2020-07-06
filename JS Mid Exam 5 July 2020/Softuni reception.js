function softuniReception(input) {
  let first = Number(input[0]);
  let second = Number(input[1]);
  let third = Number(input[2]);
  let people = Number(input[3]);
  let peoplePerHour = first + second + third;
  let hours = 0;
  while (people > 0) {
    hours++;
    if (hours % 4 === 0) {
      continue;
    }
    people -= peoplePerHour;
  }
  console.log(`Time needed: ${hours}h.`);
}
softuniReception(["5", "5", "5", "100"]);