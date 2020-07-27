function solution(input = []) {
  let pattern = /^([A-Za-z0-9!@#$?]+)\=([0-9]+)<<([\s\S]*)$/;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "Last note") {
      break;
    }
    let result = input[i].match(pattern);
    if (result !== null) {
      let nameOfPeak = result[1];
      let length = +result[2];
      let codeLength = result[3].length;
      if (length === codeLength) {
        let geohashcode = result[3];
        let peakPattern = /[A-Za-z0-9]+/g;
        let peak = nameOfPeak.match(peakPattern);
        console.log(`Coordinates found! ${peak.join("")} -> ${geohashcode}`);
      } else {
        console.log("Nothing found!");
      }
    } else {
      console.log("Nothing found!");
    }
  }
}
solution([
  "!@Ma?na?sl!u@=7<<tv58ycb4845",
  "E!ve?rest=.6<<tuvz26",
  "!K@2.,##$=4<<tvnd",
  "!Shiha@pan@gma##9<<tgfgegu67",
  "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
  "Last note",
]);
