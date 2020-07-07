function oddOccurrences(str) {
  let result = str.toLowerCase().split(" ");
  let obj = {};
  result.forEach((x) => {
    if (obj[x] === undefined) {
      obj[x] = 0;
    }
    obj[x]++;
  });
  let output = [];
  Object.entries(obj).forEach((entry) => {
    if (entry[1] % 2 !== 0) {
      output.push(entry[0]);
    }
  });
  console.log(output.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
