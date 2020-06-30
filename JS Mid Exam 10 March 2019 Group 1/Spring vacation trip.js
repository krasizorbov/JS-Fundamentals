function solution(input = []) {
  let days = +input.shift();
  let budget = +input.shift();
  let peopleCount = +input.shift();
  let fuelPricePerKilometer = +input.shift();
  let foodExpensePerson = +input.shift();
  let roomPricePerNightPerPerson = +input.shift();
  let totalExpenses = 0;
  if (peopleCount > 10) {
    roomPricePerNightPerPerson *= 0.75;
  }
  totalExpenses += days * peopleCount * foodExpensePerson;
  totalExpenses += days * peopleCount * roomPricePerNightPerPerson;
  for (let i = 1; i <= days; i++) {
    totalExpenses += fuelPricePerKilometer * +input[i - 1];
    if (totalExpenses > budget) {
      let difference = totalExpenses - budget;
      console.log(
        `Not enough money to continue the trip. You need ${difference.toFixed(
          2
        )}$ more.`
      );
      return;
    }
    if (i % 3 === 0 || i % 5 === 0) {
      totalExpenses *= 1.4;
      if (totalExpenses > budget) {
        let difference = totalExpenses - budget;
        console.log(
          `Not enough money to continue the trip. You need ${difference.toFixed(
            2
          )}$ more.`
        );
        return;
      }
    }
    if (i % 7 === 0) {
      let moneyReceived = totalExpenses / peopleCount;
      totalExpenses -= moneyReceived;
    }
  }
  let moneyLeft = budget - totalExpenses;
  console.log(
    `You have reached the destination. You have ${moneyLeft.toFixed(
      2
    )}$ budget left.`
  );
}
solution([
  "7",
  "12000",
  "5",
  "1.5",
  "10",
  "20",
  "512",
  "318",
  "202",
  "154",
  "222",
  "108",
  "123",
]);
