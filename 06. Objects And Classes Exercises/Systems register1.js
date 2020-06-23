function solve2(params) {
  let systems = new Map();
  for (const row of params) {
    let [name, component, subComponent] = row.split(" | ");
    if (!systems.get(name)) {
      systems.set(name, new Map());
    }
    let setOfSybcomponents = systems.get(name).get(component);
    if (!setOfSybcomponents) {
      systems.get(name).set(component, []);
      setOfSybcomponents = systems.get(name).get(component);
    }
    setOfSybcomponents.push(subComponent);
  }
  let ident = "|||";
  let sortSystems = (a, b) =>
    b[1].size - a[1].size !== 0
      ? b[1].size - a[1].size // By components count -> x[1].size
      : a[0] < b[0]
      ? -1 // By Name -> x[0]
      : a[0] > b[0]
      ? 1
      : 0;
  let result = [...systems]
    .sort((a, b) => sortSystems(a, b))
    .map(
      (sys) =>
        sys[0] +
        "\n" +
        [...sys[1]]
          .sort((a, b) => b[1].length - a[1].length) // By subcomponents count -> x[1].length
          .map(
            (c) =>
              ident +
              c[0] +
              "\n" +
              ident +
              ident +
              c[1].join("\n" + ident + ident)
          )
          .join("\n")
    )
    .join("\n");
  console.log(result.trim());
}
