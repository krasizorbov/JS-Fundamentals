function ladyBugs(input) {
  let size = Number(input.shift());
  if (size === 0) {
    let emptyArray = [];
    console.log(emptyArray);
  }
  let allindexes = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let indexes = [];
  for (const number of allindexes) {
    if (number >= 0 && number < size) {
      indexes.push(number);
    }
  }
  // Initial field
  let a = [];
  for (let i = 0; i < size; i++) {
    if (i === indexes[i]) {
      a.push(1);
    } else {
      a.push(0);
    }
  }
  for (let j = 0; j < input.length; j++) {
    let result = input[j].split(" ");
    let startIndex = Number(result[0]);
    let command = result[1];
    let jump = Number(result[2]);

    switch (command) {
      case "right":
        // Jump is positive
        if (startIndex >= 0 || startIndex < size || jump > 0) {
          let fliesOut = true;
          for (let i = startIndex; i < a.length; i += jump) {
            if (i + jump < a.length) {
              if (a[i + jump] === 0) {
                a[startIndex + jump] = 1;
                a[startIndex] = 0;
                fliesOut = false;
              } else {
                continue;
              }
            }
            if (fliesOut === true) {
              a[startIndex] = 0;
            }
          }
        }
        // Jump is negative
        if (startIndex >= 0 || startIndex < size || jump < 0) {
          let fliesOut = true;
          for (let i = startIndex; i >= 0; i += jump) {
            if (i + jump >= 0) {
              if (a[i + jump] === 0) {
                a[startIndex + jump] = 1;
                a[startIndex] = 0;
                fliesOut = false;
              } else {
                continue;
              }
            }
            if (fliesOut === true) {
              a[startIndex] = 0;
            }
          }
        }
        break;
      case "left":
        // Jump is positive
        if (startIndex >= 0 || startIndex < size || jump > 0) {
          let fliesOut = true;
          for (let i = startIndex; i >= 0; i -= jump) {
            if (i - jump >= 0) {
              if (a[i - jump] === 0) {
                a[startIndex - jump] = 1;
                a[startIndex] = 0;
                fliesOut = false;
              } else {
                continue;
              }
            }
            if (fliesOut === true) {
              a[startIndex] = 0;
            }
          }
        }
        // Jump is negative
        if (startIndex >= 0 || startIndex < size || jump < 0) {
          let fliesOut = true;
          for (let i = startIndex; i < a.length; i -= jump) {
            if (i - jump >= 0) {
              if (a[i - jump] === 0) {
                a[startIndex - jump] = 1;
                a[startIndex] = 0;
                fliesOut = false;
              } else {
                continue;
              }
            }
            if (fliesOut === true) {
              a[startIndex] = 0;
            }
          }
        }
        break;
      default:
        break;
    }
  }
  console.log(a.join(" "));
}
ladyBugs([5, "3", "3 left 2", "1 left -2"]);
