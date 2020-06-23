function storeCatalogue(input) {
  let catalogue = new Map();

  for (let line of input) {
    let [product, price] = line.split(":").map((e) => e.trim());
    catalogue.set(product, price);
  }

  let result = [...catalogue].sort(
    (a, b) => a[0].toLowerCase() > b[0].toLowerCase()
  );

  let letter = "";

  for (let i = 0; i < result.length; i++) {
    let [product, price] = result[i];
    let currentLetter = product[0];

    if (currentLetter != letter || i === 0) {
      console.log(currentLetter);
      letter = currentLetter;
    }
    console.log(`  ${product}: ${price}`);
  }
}
