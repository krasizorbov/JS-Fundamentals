function bonusSystem(input) {
  let studentsCount = +input.shift();
  let lecturesCount = +input.shift();
  let additionalBonus = +input.shift();
  let resultBonus = input.slice(0);
  for (let i = 0; i < resultBonus.length; i++) {
    resultBonus[i] = (+resultBonus[i] / lecturesCount) * (5 + additionalBonus);
  }
  let maxBonus = Math.max(...resultBonus);
  let index = resultBonus.indexOf(maxBonus);
  let lecture = input[index];
  if (studentsCount !== 0 && lecturesCount !== 0) {
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${lecture} lectures.`);
  } else if (studentsCount === 0) {
    console.log(`Max Bonus: ${Math.ceil(0)}.`);
    console.log(`The student has attended ${0} lectures.`);
  } else if (lecturesCount === 0) {
    console.log(`Max Bonus: ${Math.ceil(0)}.`);
    console.log(`The student has attended ${0} lectures.`);
  }
}
bonusSystem([
  "0",
  "0",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
