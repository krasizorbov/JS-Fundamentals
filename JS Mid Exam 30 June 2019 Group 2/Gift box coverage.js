function giftBox(input = []) {
  let [side, sheets, area] = input.map(Number);
  let neededArea = side * side * 6;
  let resultArea = 0;
  for (let i = 1; i <= sheets; i++) {
    if (i % 3 === 0) {
      resultArea += area * 0.25;
    } else {
      resultArea += area;
    }
  }
  let percent = (resultArea * 100) / neededArea;
  console.log(`You can cover ${percent.toFixed(2)}% of the box.`);
}
giftBox(["5", "30", "4"]);
