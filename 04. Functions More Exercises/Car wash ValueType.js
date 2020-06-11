function carWash(input) {
  let value = 0;
  let soap = (x) => x + 10;
  let water = (x) => x + x * 0.2;
  let vacuum = (x) => x + x * 0.25;
  let mud = (x) => x - x * 0.1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "soap") {
      value = soap(value);
    } else if (input[i] === "water") {
      value = water(value);
    } else if (input[i] === "vacuum cleaner") {
      value = vacuum(value);
    } else {
      value = mud(value);
    }
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
