function solution(input = []) {
  let count = input.shift();
  let pattern = /\![A-Z][a-z]{2,}\!\:\[[a-zA-Z]{8,}\]/;
  for (let i = 0; i < count; i++) {
    let result = input[i].match(pattern);
    if (result === null) {
      console.log("The message is invalid");
    } else {
      result = result
        .shift()
        .replace("!", "")
        .replace("!", "")
        .replace("[", "")
        .replace("]", "");
      let [command, message] = result.split(":");
      let numbers = [];
      for (let j = 0; j < message.length; j++) {
        numbers.push(message[j].charCodeAt(0));
      }
      console.log(`${command}: ${numbers.join(" ")}`);
    }
  }
}
solution([
  "3",
  "!play!:[TheNewSong]",
  "!Ride!:[Bike]",
  "!Watch!:[LordofTheRings]",
]);
