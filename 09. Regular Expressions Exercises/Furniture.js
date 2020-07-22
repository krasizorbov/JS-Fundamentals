function furniture(input = []) {
  let pattern = />>([A-Z+a-z]+)<<(\d+\.?\d+)!(\d+)/gm;
  let lines = input.slice(0, input.indexOf("Purchase")).join(", ");
  let result = [];
  let match = pattern.exec(lines);
  for (let i = 0; i < lines.length; i++) {
    if (match !== null) {
      let r = { name: match[1], price: match[2] * match[3] };
      result.push(r);
    } else {
      continue;
    }
    match = pattern.exec(lines);
  }
  console.log("Bought furniture:");
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].name);
    sum += result[i].price;
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
