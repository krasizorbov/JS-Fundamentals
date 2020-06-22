function convertToJson(name, lastName, hairColor) {
  let obj = { name: name, lastName: lastName, hairColor: hairColor };
  let str = JSON.stringify(obj);
  console.log(str);
}
convertToJson("George", "Jones", "Brown");
