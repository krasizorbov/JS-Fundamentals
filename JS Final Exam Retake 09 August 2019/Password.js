function solution(input = []) {
  let count = input.shift();
  let pattern = /(.+)\>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^\<\>]{3})\<\1/;
  for (let i = 0; i < count; i++) {
    let result = input[i].match(pattern);
    if (result !== null) {
      console.log(`Password: ${result[2]}${result[3]}${result[4]}${result[5]}`);
    } else {
      console.log("Try another password!");
    }
  }
}
solution([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
