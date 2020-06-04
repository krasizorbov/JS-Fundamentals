function arrayRotation(array = [], rotations) {
  let result = array.slice();
  for (let i = 0; i < rotations; i++) {
    let element = result.shift();
    result.push(element);
  }
  console.log(result.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
