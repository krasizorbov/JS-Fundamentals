function grades(grade) {
  if (grade >= 2 && grade < 3) {
    console.log("Fail");
  } else if (grade >= 3 && grade < 3.5) {
    console.log("Poor");
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log("Good");
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log("Very good");
  } else if (grade >= 5.5 && grade <= 6) {
    console.log("Excellent");
  }
}
grades(4);
