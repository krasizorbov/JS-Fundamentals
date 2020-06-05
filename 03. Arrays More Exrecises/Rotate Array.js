function arrayRotate(array) {
  let rotations = Number(array.pop());
  if (isNaN(rotations)) {
    console.log("Empty");
  } else {
    for (let i = 0; i < rotations; i++) {
      let lastElement = array.pop();
      array.unshift(lastElement);
    }
    console.log(array.join(" "));
  }
}
arrayRotate(["Banana", "Orange", "Coconut", "Apple", "15"]);
