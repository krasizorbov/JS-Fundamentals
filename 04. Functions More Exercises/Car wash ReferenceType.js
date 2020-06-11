function carWash (input) { 
  let obj = {value: 0}; 
  let soap = x => x.value += 10;
  let water = x => x.value *= 1.2;
  let vacuum = x => x.value *= 1.25;
  let mud = x => x.value *= 0.90; 
  for (let i = 0; i < input.length; i++){   
    if (input[i] === 'soap') {
      soap(obj);
    } else if (input[i] === 'water') {
      water(obj);
    } else if (input[i] === 'vacuum cleaner') {
      vacuum(obj);
    } else {
      mud(obj);
    } 
  } 
  console.log(`The car is ${obj.value.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);