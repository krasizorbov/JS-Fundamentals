function partyTime(input) {
  let vipGuestsList = [];
  let regularGuestsList = [];
  let reservation = input.shift();
  while (reservation !== "PARTY") {
    if (/^\d+/.test(reservation)) {
      vipGuestsList.push(reservation);
    } else {
      regularGuestsList.push(reservation);
    }
    reservation = input.shift();
  }
  for (let guest of input) {
    if (vipGuestsList.indexOf(guest) >= 0) {
      vipGuestsList.splice(vipGuestsList.indexOf(guest), 1);
    }
    if (regularGuestsList.indexOf(guest) >= 0) {
      regularGuestsList.splice(regularGuestsList.indexOf(guest), 1);
    }
  }
  console.log(vipGuestsList.length + regularGuestsList.length);
  vipGuestsList.forEach((el) => console.log(el));
  regularGuestsList.forEach((el) => console.log(el));
}
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
