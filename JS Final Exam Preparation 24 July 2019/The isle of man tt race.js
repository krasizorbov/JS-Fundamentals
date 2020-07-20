function solution(input = []) {
  let pattern = /^([#$%\*&])([A-Za-z]+)\1\=([0-9]+)!!([\s\S]*)$/;
  for (let i = 0; i < input.length; i++) {
    let result = input[i].match(pattern);
    if (result !== null) {
      let nameOfRacer = result[2];
      let length = +result[3];
      let codeLength = result[4].length;
      if (length === codeLength) {
        let code = result[4];
        let geohashcode = "";
        code
          .split("")
          .forEach(
            (el) =>
              (geohashcode += String.fromCharCode(el.charCodeAt(0) + length))
          );
        console.log(`Coordinates found! ${nameOfRacer} -> ${geohashcode}`);
        return;
      } else {
        console.log("Nothing found!");
      }
    } else {
      console.log("Nothing found!");
    }
  }
}
solution([
  "Ian6Hutchinson=7!!\\(58ycb4",
  "#MikeHailwood#!!'gfzxgu6768=11",
  "slop%16!!plkdek/.8x11ddkc",
  "$Steve$=9Hhffjh",
  "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
  "RichardQ^uayle=16!!fr5de5kd",
]);
