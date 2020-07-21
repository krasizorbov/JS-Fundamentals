function solution(input = []) {
  let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/gm;
  let result = [];
  let name = pattern.exec(input);
  while (name !== null) {
    result.push(name[0]);
    name = pattern.exec(input);
  }
  console.log(result.join(" "));
}
solution([
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov",
]);
