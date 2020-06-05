function addAndRemove(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "add") {
      result.push(i + 1);
    } else {
      result.pop();
    }
  }
  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}
addAndRemove(["remove", "remove", "remove"]);
