function distanceCalculator(input = []) {
  let [steps, stepLength, distance] = input.map(Number);
  let total = 0;
  for (let i = 1; i <= steps; i++) {
    if (i % 5 === 0) {
      total += (stepLength * 0.7) / 100;
    } else {
      total += stepLength / 100;
    }
  }
  let percent = (total * 100) / distance;
  console.log(`You travelled ${percent.toFixed(2)}% of the distance!`);
}
distanceCalculator(["100", "2", "1"]);
