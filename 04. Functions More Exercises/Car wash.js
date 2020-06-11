function carWash(array = []) {
  let sum = 0;
  function addNumber(n) {
    sum += n;
  }

  function addPercentage(percent) {
    let valueToAdd = (sum * percent) / 100;
    sum += valueToAdd;
  }

  function removePercentage(percent) {
    sum *= 1.0 - percent / 100.0;
  }

  let result = array.slice();
  for (let i = 0; i < result.length; i++) {
    let command = result[i];
    switch (command) {
      case "soap":
        addNumber(10);
        break;
      case "water":
        addPercentage(20);
        break;
      case "vacuum cleaner":
        addPercentage(25);
        break;
      case "mud":
        removePercentage(10);
        break;
      default:
        break;
    }
  }
  console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
