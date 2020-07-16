function lettersChangeNumbers(input) {
  let result = input.split(/\s+/);

  let numbers = "";

  first = "a";
  last = "a";
  counter1 = 0;
  counter2 = 0;
  x = 0.0;
  y = 0.0;
  sum = 0.0;

  for (let item of result) {
    for (let i = 0; i < item.length; i++) {
      first = item[0];

      if (i != 0 && i != item.length - 1) {
        numbers += item[i];
      }

      last = item[item.length - 1];
    }

    if (first.charCodeAt(0) >= 65 && first.charCodeAt(0) <= 90) {
      for (let k = 65; k <= 90; k++) {
        counter1++;
        if (first.charCodeAt(0) == k) {
          break;
        }
      }
      let number = Number(numbers);

      x = number / counter1;
    } else if (first.charCodeAt(0) >= 97 && first.charCodeAt(0) <= 122) {
      for (let k = 97; k <= 122; k++) {
        counter1++;
        if (first.charCodeAt(0) == k) {
          break;
        }
      }
      let number = Number(numbers);

      x = number * counter1;
    }

    if (last.charCodeAt(0) >= 65 && last.charCodeAt(0) <= 90) {
      for (let k = 65; k <= 90; k++) {
        counter2++;
        if (last.charCodeAt(0) == k) {
          break;
        }
      }

      y = x - counter2;
    } else if (last.charCodeAt(0) >= 97 && last.charCodeAt(0) <= 122) {
      for (let k = 97; k <= 122; k++) {
        counter2++;
        if (last.charCodeAt(0) == k) {
          break;
        }
      }

      y = x + counter2;
    }

    sum = sum + y;
    counter1 = 0;
    counter2 = 0;
    x = 0;
    y = 0;
    numbers = "";
  }
  console.log(`${sum.toFixed(2)}`);
}
lettersChangeNumbers("P34562Z q2576f   H456z");
