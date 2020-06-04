function commonElements(array1 = [], array2 = []) {
  array1.map((x, i) => {
    if (array2.includes(x)) {
      console.log(array1[i]);
    }
  });
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
