function heartDelivery(input) {
  let lastPosition = 0;
  let array = input.shift().split("@").map(Number);
  while (input.length > 0) {
    let commands = input.shift().split(" ");
    let word = commands[0];
    let index = +commands[1];
    for (let i = lastPosition; i < array.length; i++) {
      if (word === "Jump" && index >= 0 && i + index < array.length) {
        i += index;
        if (array[i] === 0) {
          console.log(`Place ${i} already had Valentine's day.`);
          lastPosition = i;
          break;
        } else {
          array[i] -= 2;
          if (array[i] === 0) {
            console.log(`Place ${i} has Valentine's day.`);
            lastPosition = i;
            break;
          }
          lastPosition = i;
          break;
        }
      } else if (word === "Jump" && index >= 0 && i + index >= array.length) {
        i = 0;
        if (array[i] === 0) {
          console.log(`Place ${i} already had Valentine's day.`);
          lastPosition = i;
          break;
        } else {
          array[i] -= 2;
          if (array[i] === 0) {
            console.log(`Place ${i} has Valentine's day.`);
            lastPosition = i;
            break;
          }
          lastPosition = i;
          break;
        }
      }
    }
  }
  console.log(`Cupid's last position was ${lastPosition}.`);
  let count = array.filter((a) => a > 0);
  if (count.length > 0) {
    console.log(`Cupid has failed ${count.length} places.`);
  } else if (count.length === 0) {
    console.log(`Mission was successful.`);
  }
}
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
