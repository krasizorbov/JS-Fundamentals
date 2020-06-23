function solve(input) {
  let register = {};
  for (let line of input) {
    let [systemName, componentName, subcomponentName] = line.split(" | ");
    if (!register.hasOwnProperty(systemName)) {
      register[systemName] = {};
    }
    if (!register[systemName].hasOwnProperty(componentName)) {
      register[systemName][componentName] = [];
    }
    register[systemName][componentName].push(subcomponentName);
  }
  let sortedKeys = Object.keys(register).sort(
    (a, b) =>
      Object.keys(register[b]).length - Object.keys(register[a]).length ||
      a.localeCompare(b)
  );
  sortedKeys.forEach((key) => {
    console.log(key);
    let sortedSubKeys = Object.keys(register[key]).sort(
      (a, b) =>
        Object.keys(register[key][b]).length -
        Object.keys(register[key][a]).length
    );
    sortedSubKeys.forEach((subKey) => {
      console.log(`|||${subKey}`);
      register[key][subKey].forEach((subComponent) => {
        console.log(`||||||${subComponent}`);
      });
    });
  });
}
