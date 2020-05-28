function gladiatorExpenses(
  counter,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmets = 0;
  let swords = 0;
  let shields = 0;
  let armors = 0;
  for (let i = 1; i <= counter; i++) {
    if (i % 12 === 0) {
      armors++;
    }
    if (i % 6 === 0) {
      shields++;
    }
    if (i % 3 === 0) {
      swords++;
    }
    if (i % 2 === 0) {
      helmets++;
    }
  }
  let expenses =
    armors * armorPrice +
    shields * shieldPrice +
    swords * swordPrice +
    helmets * helmetPrice;
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
