function movies(array = []) {
  let result = [];
  while (array.length > 0) {
    let commands = array.shift().split(" ");
    if (commands.includes("addMovie")) {
      commands.shift();
      let movie = { name: commands.join(" ") };
      result.push(movie);
    } else if (commands.includes("directedBy")) {
      let index = commands.indexOf("directedBy");
      let name = commands.slice(0, index).join(" ");
      let director = commands.slice(index + 1, commands.length).join(" ");
      for (const m of result) {
        if (m.name === name) {
          m.director = director;
        }
      }
    } else if (commands.includes("onDate")) {
      let index = commands.indexOf("onDate");
      let name = commands.slice(0, index).join(" ");
      let date = commands.slice(index + 1, commands.length).join(" ");
      for (const m of result) {
        if (m.name === name) {
          m.date = date;
        }
      }
    }
  }
  for (const movie of result) {
    if (movie.hasOwnProperty("director") && movie.hasOwnProperty("date")) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
