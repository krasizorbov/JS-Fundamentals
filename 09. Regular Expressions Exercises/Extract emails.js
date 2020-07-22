function extractEmails(input = []) {
  let regex = /\b([a-z](?:_?[a-z0-9\-\.]+@[a-z\-]+\.[a-z]+([\.a-z]+)?))\b/gm;
  for (let i = 0; i < input.length; i++) {
    let r = input[i].split(" ");
    for (let j = 0; j < r.length; j++) {
      let result = r[j].match(regex);
      if (result !== null) {
        if (
          r[j].startsWith(".") ||
          r[j].startsWith("-") ||
          r[j].startsWith("_")
        ) {
          continue;
        }
        console.log(result[0]);
      }
    }
  }
}
extractEmails([
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information .info@info.info .",
]);
