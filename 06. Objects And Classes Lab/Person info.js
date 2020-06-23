function personInfo(firstName, lastName, age) {
  let person = { firstName: firstName, lastName: lastName, age: age };
  let entries = Object.entries(person);
  for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}
personInfo("Peter", "Pan", "20");
