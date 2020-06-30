function solution(input) {
  let items = input[0].split("|");
  let collectedItems = [];
  let budget = Number(input[1]);
  let maxPrice = 0;
  let newSum = 0;

  for (let i = 0; i < items.length; i++) {
    let product = items[i].split("->")[0];
    let price = Number(items[i].split("->")[1]);
    if (product === "Clothes") {
      maxPrice = 50;
    } else if (product === "Shoes") {
      maxPrice = 35;
    } else if (product === "Accessories") {
      maxPrice = 20.5;
    }
    if (budget >= price && price <= maxPrice) {
      budget -= price;
      collectedItems.push(price * 1.4);
    }
  }
  for (let j = 0; j < collectedItems.length; j++) {
    collectedItems[j] = Number(collectedItems[j].toFixed(2));
    newSum += collectedItems[j];
  }

  let profit = newSum - newSum / 1.4;
  let currentMoney = budget + newSum;

  console.log(collectedItems.map((x) => x.toFixed(2)).join(" "));
  console.log(`Profit: ${profit.toFixed(2)}`);

  if (currentMoney >= 150) {
    console.log("Hello, France!");
  } else {
    console.log("Time to go.");
  }
}
solution([
  "Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60",
  "120",
]);
