function starEnigma(input = []) {
  let count = Number(input.shift());
  let result = [];
  let numRegex = /[SsTtAaRr]+/gim;
  let regex = /@([A-Za-z]+)[^@:!\->]*:(\d+)[^@:!\->]*!([A|D])![^@:!\->]*\->(\d+)/;
  for (let i = 0; i < count; i++) {
    let num = 0;
    if (input[i].match(numRegex) !== null) {
      num = input[i].match(numRegex).join("").length;
    } else {
      num = 0;
    }
    let str = "";
    for (let j = 0; j < input[i].length; j++) {
      str += String.fromCharCode(input[i][j].charCodeAt(0) - num);
    }
    result.push(str);
  }
  let attackedPlanets = [];
  let destroyedPlanets = [];
  for (let i = 0; i < result.length; i++) {
    let match = result[i].match(regex);
    if (match !== null) {
      if (match[3] === "A") {
        attackedPlanets.push(match[1]);
      } else {
        destroyedPlanets.push(match[1]);
      }
    }
  }
  attackedPlanets.sort((a, b) => a.localeCompare(b));
  console.log(`Attacked planets: ${attackedPlanets.length}`);
  for (let i = 0; i < attackedPlanets.length; i++) {
    console.log(`-> ${attackedPlanets[i]}`);
  }
  destroyedPlanets.sort((a, b) => a.localeCompare(b));
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  for (let i = 0; i < destroyedPlanets.length; i++) {
    console.log(`-> ${destroyedPlanets[i]}`);
  }
}
starEnigma([
  "3",
  "gg(''DGyvywgeux>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
