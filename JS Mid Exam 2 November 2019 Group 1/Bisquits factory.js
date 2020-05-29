function BiscuitFactory([bisquitsPerDay, workers, competitor]) {
  let bisquitsPerMonth = 0;
  for (let i = 1; i <= 30; i++) {
    let dayly = bisquitsPerDay * workers;
    if (i % 3 === 0) {
      dayly = Math.floor(dayly * 0.75);
    }
    bisquitsPerMonth += dayly;
  }
  console.log(
    `You have produced ${bisquitsPerMonth} biscuits for the past month.`
  );
  let diff = bisquitsPerMonth - competitor;
  let percent = (Math.abs(diff) / competitor) * 100;
  if (diff > 0) {
    console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
  } else {
    console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
  }
}
bisquitsFactory(["65", "12", "26000"]);
