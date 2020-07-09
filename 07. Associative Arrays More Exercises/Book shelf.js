function solution(input = []) {
  let data = new Map();
  let genres = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("->")) {
      let [id, genre] = input[i].split(" -> ");
      if (!data.has(id)) {
        genres[genre] = id;
        genre = [];
        data.set(id, genre);
      }
    } else {
      let line = input[i].split(": ");
      let bookName = line[0];
      let [authorName, genre] = line[1].split(", ");
      if (genres.hasOwnProperty(genre)) {
        let id = genres[genre];
        let obj = { title: bookName, author: authorName, genre: genre };
        data.get(id).push(obj);
      }
    }
  }
  data = new Map([...data.entries()].sort((a, b) => b[1].length - a[1].length));
  for (const entries of data) {
    console.log(`${entries[0]} ${entries[1][0].genre}: ${entries[1].length}`);
    entries[1].sort((a, b) => a.title.localeCompare(b.title));
    for (const obj of entries[1]) {
      console.log(`--> ${obj.title}: ${obj.author}`);
    }
  }
}
solution([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
