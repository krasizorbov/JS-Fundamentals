function solution(input) {
  let pattern = /([\||#])([A-z]+\s?[A-z]+)\1([0-9]{2}\/[0-9]{2}\/[0-9]{2})\1([0-9]{1,9999})\1/g;
  const calories = 2000;
  let sum = 0;
  let output = [];
  let result = input.shift();
  let regex = pattern.exec(result);
  while (regex) {
    sum += +regex[4];
    output.push({ item: regex[2], day: regex[3], cal: regex[4] });
    regex = pattern.exec(result);
  }
  let days = Math.floor(sum / calories);

  console.log(`You have food to last you for: ${days} days!`);
  for (let i = 0; i < output.length; i++) {
    console.log(
      `Item: ${output[i].item}, Best before: ${output[i].day}, Nutrition: ${output[i].cal}`
    );
  }
}
solution([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
