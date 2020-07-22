function softuniBarIncome(input = []) {
  let sum = 0;
  let pattern = /%(?<person>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+)\$/;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "end of shift") {
      break;
    }
    let result = input[i].match(pattern);

    if (result !== null) {
      let total = result[3] * result[4];
      sum += total;
      console.log(`${result[1]}: ${result[2]} - ${total.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${sum.toFixed(2)}`);
}
