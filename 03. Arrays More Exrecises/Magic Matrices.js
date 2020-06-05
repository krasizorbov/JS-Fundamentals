function magicMatrix(array = [[]]) {
  // Callback reduce function
  function myFunc(total, num) {
    return total + num;
  }

  let sum = array[0].reduce(myFunc);
  let horizontal = true;
  let vertical = true;

  for (let i = 0; i < array.length; i++) {
    // Summing the rows
    if (array[i].reduce(myFunc) !== sum) {
      horizontal = false;
    }
  }

  for (let j = 0; j < array.length; j++) {
    // Summing the columns
    // Returns the columns as arrays
    let col = array.map(function (value) {
      return value[j];
    });
    if (col.reduce(myFunc) !== sum) {
      vertical = false;
    }
  }

  if (horizontal === true && vertical === true) {
    console.log("true");
  } else {
    console.log("false");
  }
}
magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
