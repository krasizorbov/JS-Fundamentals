function tseamAccount(array = []) {
  let result = [];
  let newArray = array.shift().split(" ");
  result = newArray.slice();
  for (let i = 0; i < array.length; i++) {
    let splitArray = array[i].split(" ");
    let command = splitArray[0];
    let gameName = splitArray[1];
    if (command === "Install") {
      if (!result.includes(gameName)) {
        result.push(gameName);
      }
    }
    if (command === "Uninstall") {
      if (result.includes(gameName)) {
        let index = result.indexOf(gameName);
        result.splice(index, 1);
      }
    }
    if (command === "Update") {
      if (result.includes(gameName)) {
        let index = result.indexOf(gameName);
        result.splice(index, 1);
        result.push(gameName);
      }
    }
    if (command === "Expansion") {
      let gameExpansion = gameName.split("-");
      let game = gameExpansion[0];
      let expansion = gameExpansion[1];
      if (result.includes(game)) {
        let index = result.indexOf(game);
        result.splice(index + 1, 0, game + ":" + expansion);
      }
    }
  }
  console.log(result.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
