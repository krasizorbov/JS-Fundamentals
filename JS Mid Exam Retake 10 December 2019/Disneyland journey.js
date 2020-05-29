function disneylandJourney(input = []) {
  let moneyNeeded = +input.shift();
  let months = +input.shift();
  let sum = 0;
  let cost25 = moneyNeeded * 0.25;
  for (let i = 1; i <= months; i++) {
    if (i % 2 !== 0 && i !== 1) {
      sum -= sum * 0.16;
    }
    if (i % 4 === 0 && i !== 0) {
      sum += sum * 0.25;
    }
    sum += cost25;
  }
  if (sum >= moneyNeeded) {
    let total = sum - moneyNeeded;
    console.log(
      `Bravo! You can go to Disneyland and you will have ${total.toFixed(
        2
      )}lv. for souvenirs.`
    );
  } else {
    let total = moneyNeeded - sum;
    console.log(`Sorry. You need ${total.toFixed(2)}lv. more.`);
  }
}
disneylandJourney(["3265", "3"]);
