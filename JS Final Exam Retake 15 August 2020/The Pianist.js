function solution(input = []) {
  let n = +input.shift();
  let pieces = {};
  for (let i = 0; i < input.length; i++) {
    if (n > i) {
      let [piece, composer, key] = input[i].split("|");
      pieces[piece] = { composer: composer, key: key };
    } else {
      let line = input[i].split("|");
      let command = line[0];
      if (input[i] === "Stop") {
        break;
      } else if (command === "Add") {
        let piece = line[1];
        let composer = line[2];
        let key = line[3];
        if (pieces.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          pieces[piece] = { composer: composer, key: key };
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        }
      } else if (command === "Remove") {
        let piece = line[1];
        if (pieces.hasOwnProperty(piece)) {
          delete pieces[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
      } else if (command === "ChangeKey") {
        let piece = line[1];
        let newKey = line[2];
        if (pieces.hasOwnProperty(piece)) {
          pieces[piece].key = newKey;
          console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
      }
    }
  }
  let sorted = Object.entries(pieces).sort(
    (a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1])
  );
  for (const s of sorted) {
    console.log(`${s[0]} -> Composer: ${s[1].composer}, Key: ${s[1].key}`);
  }
}
solution([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
