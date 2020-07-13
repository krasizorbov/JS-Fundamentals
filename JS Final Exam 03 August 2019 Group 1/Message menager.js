function solution(input = []) {
  let capacity = input.shift();
  let users = {};
  for (const line of input) {
    let command = line.split("=")[0];
    if (command === "Add") {
      let user = line.split("=")[1];
      let sent = +line.split("=")[2];
      let received = +line.split("=")[3];
      if (!users.hasOwnProperty(user)) {
        users[user] = { sent: sent, received: received };
      }
    } else if (command === "Message") {
      let sender = line.split("=")[1];
      let receiver = line.split("=")[2];
      if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
        users[sender].sent++;
        users[receiver].received++;
        if (users[sender].sent + users[sender].received >= capacity) {
          delete users[sender];
          console.log(`${sender} reached the capacity!`);
        }
        if (users[receiver].sent + users[receiver].received >= capacity) {
          delete users[receiver];
          console.log(`${receiver} reached the capacity!`);
        }
      }
    } else if (command === "Empty") {
      let user = line.split("=")[1];
      if (user === "All") {
        for (const key in users) {
          if (users.hasOwnProperty(key)) {
            delete users[key];
          }
        }
      }
      if (users.hasOwnProperty(user)) {
        delete users[user];
      }
    }
  }
  let sorted = Object.keys(users);
  sorted.sort(
    (a, b) => users[b].received - users[a].received || a.localeCompare(b)
  );
  console.log(`Users count: ${sorted.length}`);
  for (const user of sorted) {
    console.log(`${user} - ${users[user].sent + users[user].received}`);
  }
}
solution([
  "20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics",
]);
