function songs(input = []) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let num = +input.shift();
  let result = [];
  let list = input.pop();
  for (let i = 0; i < num; i++) {
    let typeList = input[i].split("_")[0];
    let name = input[i].split("_")[1];
    let time = input[i].split("_")[2];
    let song = new Song(typeList, name, time);
    result.push(song);
  }
  for (const r of result) {
    if (list === "all") {
      console.log(r.name);
    } else if (r.typeList === list) {
      console.log(r.name);
    }
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
