function passwordValidator(str) {
  let len = length(str);
  let lett = lettersAndDigits(str);
  let d = digits(str);
  if (len === false) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (lett === false) {
    console.log("Password must consist only of letters and digits");
  }
  if (d === false) {
    console.log("Password must have at least 2 digits");
  }
  if (len === true && lett === true && d === true) {
    console.log("Password is valid");
  }
  function length(str) {
    if (str.length >= 6 && str.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
  function isInRange(ch, start, end) {
    return (
      ch.charCodeAt(0) >= start.charCodeAt(0) &&
      ch.charCodeAt(0) <= end.charCodeAt(0)
    );
  }
  function lettersAndDigits(str) {
    let isValid = true;
    for (const ch of str) {
      if (
        !(
          isInRange(ch, "A", "Z") ||
          isInRange(ch, "a", "z") ||
          isInRange(ch, "0", "9")
        )
      ) {
        isValid = false;
      }
    }
    return isValid;
  }

  function digits(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      let n = Number(str[i]);
      if (!isNaN(n)) {
        counter++;
      }
    }
    if (counter >= 2) {
      return true;
    } else {
      return false;
    }
  }
}
passwordValidator("Pa$s$s");
