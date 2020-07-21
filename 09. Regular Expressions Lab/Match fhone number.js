function solution(input = []) {
  let pattern = /\+359([\-\s])2\1[0-9]{3}\1[0-9]{4}/g;
  let result = [];
  let phoneNumber = pattern.exec(input);
  while (phoneNumber !== null) {
    result.push(phoneNumber[0]);
    phoneNumber = pattern.exec(input);
  }
  console.log(result.join(", "));
}
solution([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
