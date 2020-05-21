function triangle(n) {
  let s = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      s += i + " ";
    }
    console.log(s);
    s = "";
  }
}

triangle(9);
