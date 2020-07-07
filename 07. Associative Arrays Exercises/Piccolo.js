function piccolo(input = []) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(", ");
    let direction = commands[0];
    let plate = commands[1];
    if (direction === "IN") {
      if (!obj.hasOwnProperty(plate)) {
        obj[plate] = direction;
      }
    } else if (direction === "OUT") {
      if (obj.hasOwnProperty(plate)) {
        delete obj[plate];
      }
    }
  }
  let output = [];
  Object.entries(obj).forEach((x) => {
    output.push(x[0]);
  });
  console.log(output.sort((a, b) => a.localeCompare(b)).join("\n"));
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
