function minerTask(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i += 2) {
    let material = input[i];
    let quantity = +input[i + 1];

    if (!result.hasOwnProperty(material)) {
      result[material] = quantity;
    } else {
      result[material] += quantity;
    }
  }
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      console.log(`${key} -> ${result[key]}`);
    }
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
