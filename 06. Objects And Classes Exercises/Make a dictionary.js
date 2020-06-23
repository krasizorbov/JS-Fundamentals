function makeDictionary(array = []) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    let el = JSON.parse(array[i]);
    let entry = Object.entries(el)[0];
    result[entry[0]] = entry[1];
  }
  let sorted = {};
  for (const x of Object.keys(result).sort((a, b) => a.localeCompare(b))) {
    sorted[x] = result[x];
  }
  for (const term in sorted) {
    if (sorted.hasOwnProperty(term)) {
      const definition = sorted[term];
      console.log(`Term: ${term} => Definition: ${definition}`);
    }
  }
}
makeDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
