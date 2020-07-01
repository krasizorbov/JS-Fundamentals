function solution(input = []) {
  let days = +input.shift();
  let playersCount = +input.shift();
  let energy = +input.shift();
  let water = +input.shift();
  let food = +input.shift();
  let totalWater = days * playersCount * water;
  let totalFood = days * playersCount * food;
  for (let i = 1; i <= days; i++) {
    energy -= +input[i - 1];
    if (energy <= 0) {
      console.log(
        `You will run out of energy. You will be left with ${totalFood.toFixed(
          2
        )} food and ${totalWater.toFixed(2)} water.`
      );
      return;
    }
    if (i % 2 === 0) {
      energy += energy * 0.05;
      totalWater -= totalWater * 0.3;
    }
    if (i % 3 === 0) {
      energy += energy * 0.1;
      let reducedAmount = totalFood / playersCount;
      totalFood -= reducedAmount;
    }
  }
  console.log(
    `You are ready for the quest. You will be left with - ${energy.toFixed(
      2
    )} energy!`
  );
}
solution([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
