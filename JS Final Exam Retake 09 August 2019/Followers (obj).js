function solution(input) {
  let followers = {};
  for (const line of input) {
    if (line === "Log out") {
      break;
    }
    let [command, username, count] = line.split(/:\s+/g);
    if (command === "New follower") {
      if (!followers.hasOwnProperty(username)) {
        followers[username] = { likes: 0, comments: 0 };
      }
    } else if (command === "Like") {
      if (!followers.hasOwnProperty(username)) {
        followers[username] = { likes: 0, comments: 0 };
      }
      followers[username].likes += +count;
    } else if (command === "Comment") {
      if (!followers.hasOwnProperty(username)) {
        followers[username] = { likes: 0, comments: 0 };
      }
      followers[username].comments++;
    } else if (command === "Blocked") {
      if (!followers.hasOwnProperty(username)) {
        console.log(`${username} doesn't exist.`);
      }
      delete followers[username];
    }
  }
  let sorted = Object.keys(followers);
  sorted.sort(
    (a, b) => followers[b].likes - followers[a].likes || a.localeCompare(b)
  );
  console.log(`${sorted.length} followers`);
  for (const name of sorted) {
    console.log(`${name}: ${followers[name].likes + followers[name].comments}`);
  }
}
solution([
  "New follower: gosho",
  "Like: gosho: 5",
  "Comment: gosho",
  "New follower: gosho",
  "New follower: tosho",
  "Comment: gosho",
  "Like: pesho: 5",
  "Comment: tosho",
  "Comment: pesho",
  "Log out",
]);
