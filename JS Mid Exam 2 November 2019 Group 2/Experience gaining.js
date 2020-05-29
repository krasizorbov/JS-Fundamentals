function solve(arr) {
  arr = arr.map(Number);
  let neededPoints = arr.shift();
  let battles = arr.shift();
  let points = 0;
  let count = 0;
  for (let i = 0; i < battles; i++) {
    count++;
    if (count % 3 === 0) {
      points += arr[i] + arr[i] * 0.15;
    } else if (count % 5 === 0) {
      points += arr[i] - arr[i] * 0.1;
    } else {
      points += arr[i];
    }
    if (points >= neededPoints) {
      console.log(
        `Player successfully collected his needed experience for ${count} battles.`
      );
      return;
    }
  }
  console.log(
    `Player was not able to collect the needed experience, ${(
      neededPoints - points
    ).toFixed(2)} more needed.`
  );
}
solve(["500", "5", "50", "100", "200", "100", "30"]);
