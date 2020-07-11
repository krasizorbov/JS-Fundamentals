function solution(input = []) {
  let count = input.shift();
  let registrationsCount = 0;
  let pattern = /U\$[A-Z][a-z]{2,}U\$P\@\$[a-z]{5,}[0-9]+P\@\$/;
  for (let i = 0; i < count; i++) {
    let result = input[i].match(pattern);
    if (result !== null) {
      console.log("Registration was successful");
      result = result
        .shift()
        .replace("U$", "")
        .replace("P@$", "")
        .replace("P@$", "");
      let [username, password] = result.split("U$");
      console.log(`Username: ${username}, Password: ${password}`);
      registrationsCount++;
    } else {
      console.log("Invalid username or password");
    }
  }
  console.log(`Successful registrations: ${registrationsCount}`);
}
solution([
  "3",
  "U$MichaelU$P@$asdqwe123P@$",
  "U$NameU$P@$PasswordP@$",
  "U$UserU$P@$ad2P@$",
]);
