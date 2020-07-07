function solveTravelTime(input) {
  let travelData = {};

  for (let i = 0; i < input.length; i++) {
    let [country, town, price] = input[i].split(" > ").filter((e) => e !== "");
    price = +price;
    town = town[0].toUpperCase() + town.slice(1);

    if (!travelData.hasOwnProperty(country)) {
      travelData[country] = {};
    }
    if (!travelData[country].hasOwnProperty(town)) {
      travelData[country][town] = price;
    }
    if (travelData[country][town] > price) {
      travelData[country][town] = price;
    }
  }

  let orderedCountries = [...Object.keys(travelData)].sort((a, b) =>
    a.localeCompare(b)
  );
  let result = "";
  for (let country of orderedCountries) {
    result += country + " -> ";
    let sortedPrices = [...Object.keys(travelData[country])].sort(
      (a, b) => travelData[country][a] - travelData[country][b]
    );
    for (let town of sortedPrices) {
      result += `${town} -> ${travelData[country][town]} `;
    }
    result += "\n";
  }
  console.log(result);
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
