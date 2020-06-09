function wrongResult(a, b, c) {
  if (a < 0 && b < 0 && c < 0) {
    console.log("Negative");
  } else if (a < 0 && b > 0 && c > 0) {
    console.log("Negative");
  } else if (b < 0 && a > 0 && c > 0) {
    console.log("Negative");
  } else if (c < 0 && b > 0 && a > 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}
wrongResult(-10, -10, -10);
