function carWash(input) {
  let funcs = {
    soap: (x) => x + 10,
    water: (x) => x + x * 0.2,
    "vacuum cleaner": (x) => x + x * 0.25,
    mud: (x) => x - x * 0.1,
  };

  let value = input.reduce((acc, curr) => funcs[curr](acc), 0);
  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
