function solution(input = []) {
  let message = input.shift();
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(":|:");
    if (line[0] === "InsertSpace") {
      let index = +line[1];
      let firstPart = message.substring(0, index);
      let secondPart = message.substring(index);
      message = firstPart + " " + secondPart;
      console.log(message);
    } else if (line[0] === "Reverse") {
      let sub = line[1];
      if (message.includes(sub)) {
        let index = message.indexOf(sub);
        let secondPart = message
          .substring(index, index + sub.length)
          .split("")
          .reverse()
          .join("");
        let firstPart = message.substring(0, index);
        let thirdPart = message.substring(index + sub.length);
        message = firstPart + thirdPart + secondPart;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (line[0] === "ChangeAll") {
      let sub = line[1];
      let str = line[2];
      while (message.includes(sub)) {
        let index = message.indexOf(sub);
        let part = message.substring(index, index + sub.length);
        message = message.replace(part, str);
      }
      console.log(message);
    } else if (line[0] === "Reveal") {
      console.log(`You have a new text message: ${message}`);
      break;
    }
  }
}
solution([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
