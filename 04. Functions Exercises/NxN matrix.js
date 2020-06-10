function matrix(a) {
  for (let i = 0; i < a; i++) {
    let str = a.toString() + " ";
    console.log(str.repeat(a));
  }
}
matrix(7);
