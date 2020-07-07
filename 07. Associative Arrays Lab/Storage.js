function solution(input = []) {
  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    let [product, quantity] = input[i].split(" ");
    if (!map.has(product)) {
      map.set(product, +quantity);
    } else {
      let currQuantity = map.get(product);
      let newQuantity = currQuantity + Number(quantity);
      map.set(product, newQuantity);
    }
  }
  for (const [key, value] of map) {
    console.log(`${key} -> ${value}`);
  }
}
solution(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
