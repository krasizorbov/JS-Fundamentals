function replaceRepeatingCharacters(input) {
  let output = input
    .split("")
    .filter((l, index, arr) => l !== arr[index + 1])
    .join("");
  console.log(output);
}
replaceRepeatingCharacters("aaaaabbbbbcdddeeeedssaa");
