function townInfo(townName, population, area) {
  if (typeof population === "number" && typeof area === "number") {
    console.log(
      `Town ${townName} has population of ${population} and area ${area} square km.`
    );
  }
}
townInfo("Sofia", 1234567, 765);
