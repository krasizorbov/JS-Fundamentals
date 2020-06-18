function buildAwall(array = []) {
  let cubicYardsSum = 0;
  let cubicYards = [];
  while (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 30) {
        array[i] += 1;
        cubicYardsSum += 195;
      }
    }
    cubicYards.push(cubicYardsSum);
    cubicYardsSum = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === 30) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  console.log(cubicYards.join(", "));
  let totalCubicYards = cubicYards.reduce((a, c) => a + c);
  let totalSum = totalCubicYards * 1900;
  console.log(`${totalSum} pesos`);
}
buildAwall([21, 25, 28]);
