function solution(input = []) {
  let data = new Map();
  let users = [];
  let articles = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("user")) {
      let userName = input[i].split(" ")[1];
      if (!users.includes(userName)) {
        users.push(userName);
      }
    } else if (input[i].includes("article")) {
      let articleName = input[i].split(" ")[1];
      if (!articles.includes(articleName)) {
        articles.push(articleName);
        data.set(articleName, []);
      }
    } else if (input[i].includes("posts")) {
      let line = input[i].split(": ");
      let userName = line[0].split(" ")[0];
      let articleName = line[0].split(" ")[3];
      let title = line[1].split(", ")[0];
      let content = line[1].split(", ")[1];
      if (users.includes(userName) && articles.includes(articleName)) {
        let obj = { userName: userName, title: title, content: content };
        data.get(articleName).push(obj);
      }
    }
  }
  data = new Map([...data.entries()].sort((a, b) => b[1].length - a[1].length));
  for (const d of data) {
    console.log(`Comments on ${d[0]}`);
    d[1].sort((a, b) => a.userName.localeCompare(b.userName));
    for (const obj of d[1]) {
      console.log(
        `--- From user ${obj.userName}: ${obj.title} - ${obj.content}`
      );
    }
  }
}
solution([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
