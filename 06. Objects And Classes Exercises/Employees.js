function employees(array = []) {
  class Employee {
    constructor(name, personelNumber) {
      this.name = name;
      this.personelNumber = personelNumber;
    }
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    em = new Employee(array[i], array[i].length);
    result.push(em);
  }
  for (const key of result) {
    console.log(`Name: ${key.name} -- Personal Number: ${key.personelNumber}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
