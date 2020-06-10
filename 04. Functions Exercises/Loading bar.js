function loadingBar(n) {
  let symbol = "%";
  let dot = ".";
  let percent = symbol.repeat(n / 10);
  let dots = dot.repeat(10 - n / 10);
  if (n < 100) {
    console.log(`${n}${symbol} [${percent}${dots}]`);
    console.log("Still loading...");
  } else if (n === 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  }
}
loadingBar(0);
