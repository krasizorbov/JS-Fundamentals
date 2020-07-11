function solution(input = []) {
  let users = new Map();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split("->");
    let command = line[0];
    if (command === "Add") {
      let name = line[1];
      if (!users.has(name)) {
        users.set(name, []);
      } else {
        console.log(`${name} is already registered`);
      }
    } else if (command === "Send") {
      let name = line[1];
      let email = line[2];
      let current = users.get(name);
      current.push(email);
    } else if (command === "Delete") {
      let name = line[1];
      if (users.has(name)) {
        users.delete(name);
      } else {
        console.log(`${name} not found!`);
      }
    }
  }
  users = new Map(
    [...users.entries()].sort((a, b) => sortByCount(a, b) || sortByName(a, b))
  );
  console.log(`Users count: ${users.size}`);
  for (const user of users) {
    console.log(user[0]);
    for (const u of user[1]) {
      console.log(` - ${u}`);
    }
  }
  function sortByCount(a, b) {
    return b[1].length - a[1].length;
  }
  function sortByName(a, b) {
    return a[0].localeCompare(b[0]);
  }
}
solution([
  "Add->Mike",
  "Add->George",
  "Send->George->Hello World",
  "Send->George->Some random test mail",
  "Send->Mike->Hello, do you want to meet up tomorrow?",
  "Send->George->It would be a pleasure",
  "Send->Mike->Another random test mail",
  "Statistics",
]);
