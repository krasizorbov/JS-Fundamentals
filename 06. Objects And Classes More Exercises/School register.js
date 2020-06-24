function schoolRegister(input = []) {
  let grades = {};
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(", ");
    let name = line[0].split(": ")[1];
    let grade = +line[1].split(": ")[1] + 1;
    let score = +line[2].split(": ")[1];
    if (score > 3) {
      if (!grades.hasOwnProperty(grade)) {
        grades[grade] = [];
      }
      grades[grade].push({ name, score });
    }
  }
  let sortedGrades = Object.keys(grades).sort((a, b) => a - b);
  for (const grade of sortedGrades) {
    console.log(`${grade} Grade`);
    let students = grades[grade];
    console.log(`List of students: ${students.map((n) => n.name).join(", ")}`);
    console.log(
      `Average annual grade from last year: ${average(
        students.map((s) => s.score)
      ).toFixed(2)}`
    );
    console.log();
  }
  function average(arr) {
    return arr.reduce((a, c) => a + c, 0) / arr.length;
  }
}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
