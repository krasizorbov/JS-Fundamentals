function solution(input = []) {
  let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
  let result = "";
  let count = +input.shift();
  for (let i = 0; i < count; i++) {
    result = input[i].match(pattern);
    if (result === null) {
      console.log("Invalid barcode");
    } else {
      let digitPattern = /\d/g;
      let group = input[i].match(digitPattern);
      if (group !== null) {
        console.log(`Product group: ${group.join("")}`);
      } else {
        console.log(`Product group: 00`);
      }
    }
  }
}
solution(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che46sE@##"]);
