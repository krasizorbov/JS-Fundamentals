function fuelMoney(distance, pasengers, price) {
  let fuelNeededPerKillometer = pasengers * 0.1 + 7 * (distance / 100);
  let money = price * fuelNeededPerKillometer;
  console.log(`Needed money for that trip is ${money}lv.`);
}
fuelMoney(260, 9, 2.49);
