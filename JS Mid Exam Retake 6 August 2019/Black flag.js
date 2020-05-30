function blackFlag(input = []) {
  let days = +input.shift();
  let daylyPlunder = +input.shift();
  let expectedPlunder = +input.shift();
  let actualPlunder = 0;
  for (let i = 1; i <= days; i++) {
    actualPlunder += daylyPlunder;
    if (i % 3 === 0) {
      actualPlunder += daylyPlunder * 0.5;
    }
    if (i % 5 === 0) {
      actualPlunder -= actualPlunder * 0.3;
    }
  }
  if (actualPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${actualPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percent = (actualPlunder * 100) / expectedPlunder;
    console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
