function triples(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let k = 0; k < num; k++) {
        let letterA = String.fromCharCode(97 + i);
        let letterB = String.fromCharCode(97 + j);
        let letterC = String.fromCharCode(97 + k);
        console.log(`${letterA}${letterB}${letterC}`);
      }
    }
  }
}
triples(3);
