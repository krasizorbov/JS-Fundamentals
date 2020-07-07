function companyUsers(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    let [company, id] = input[i].split(" -> ");
    if (!result.hasOwnProperty(company)) {
      result[company] = [];
    }
    if (!result[company].includes(id)) {
      result[company].push(id);
    }
  }
  let orderedCompanies = [...Object.keys(result)].sort((a, b) =>
    a.localeCompare(b)
  );
  for (const company of orderedCompanies) {
    console.log(company);
    for (const id of result[company]) {
      console.log(`-- ${id}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
