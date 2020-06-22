function cats(input = []) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let name = input[i].split(" ")[0];
    let age = +input[i].split(" ")[1];
    let cat = new Cat(name, age);
    result.push(cat);
  }
  meow(result);
  function meow(result) {
    for (let i of result) {
      console.log(`${i.name}, age ${i.age} says Meow`);
    }
  }
}
cats(["Mellow 2", "Tom 5"]);
