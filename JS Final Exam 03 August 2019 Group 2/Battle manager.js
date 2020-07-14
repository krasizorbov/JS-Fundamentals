function solution(input = []) {
  let people = {};
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(":");
    let command = line[0];
    if (command === "Add") {
      let person = line[1];
      let health = +line[2];
      let energy = +line[3];
      if (!people.hasOwnProperty(person)) {
        people[person] = { health: health, energy: energy };
      } else {
        people[person].health += health;
      }
    } else if (command === "Attack") {
      let attacker = line[1];
      let defender = line[2];
      let damage = +line[3];
      if (people.hasOwnProperty(attacker) && people.hasOwnProperty(defender)) {
        people[defender].health -= damage;
        if (people[defender].health <= 0) {
          console.log(`${defender} was disqualified!`);
          delete people[defender];
        }
        people[attacker].energy--;
        if (people[attacker].energy <= 0) {
          console.log(`${attacker} was disqualified!`);
          delete people[attacker];
        }
      }
    } else if (command === "Delete") {
      let person = line[1];
      if (people.hasOwnProperty(person)) {
        delete people[person];
      }
      if (person === "All") {
        for (const key in people) {
          if (people.hasOwnProperty(key)) {
            delete people[key];
          }
        }
      }
    }
  }
  let sorted = Object.keys(people).sort(
    (a, b) => people[b].health - people[a].health || a.localeCompare(b)
  );
  console.log(`People count: ${sorted.length}`);
  for (const person of sorted) {
    console.log(
      `${person} - ${people[person].health} - ${people[person].energy}`
    );
  }
}
solution([
  "Add:Mark:1000:5",
  "Add:Clark:1000:3",
  "Attack:Clark:Mark:500",
  "Add:Allison:2500:5",
  "Attack:Clark:Mark:300",
  "Add:Charlie:4000:10",
  "Attack:Clark:Mark:500",
  "Results",
]);
