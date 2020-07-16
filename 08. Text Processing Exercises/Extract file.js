function extractFile(input) {
  let result = input.substring(input.lastIndexOf("\\") + 1);
  let fileName = result.substring(0, result.lastIndexOf("."));
  let extension = result.substring(result.lastIndexOf(".") + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
