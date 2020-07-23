function solution(input = []) {
  let str = input.shift().split(", ");
  let pattern = /^.*?(\@{6,}|\${6,}|\^{6,}|\#{6,}).*?$/;
  let at = "@@@@@@@@@@@@@@@@@@@@";
  let hash = "####################";
  let dollar = "$$$$$$$$$$$$$$$$$$$$";
  let caret = "^^^^^^^^^^^^^^^^^^^^";
  for (let i = 0; i < str.length; i++) {
    let ticket = str[i].trim();
    if (ticket.length === 20) {
      if (
        ticket === at ||
        ticket === hash ||
        ticket === dollar ||
        ticket === caret
      ) {
        let char = ticket[0];
        console.log(`ticket "${ticket}" - 10${char} Jackpot!`);
      } else {
        let leftHalf = ticket.substring(0, 10);
        let rightHalf = ticket.substring(10);
        let leftResult = leftHalf.match(pattern);
        let rightResult = rightHalf.match(pattern);
        if (leftResult !== null && rightResult !== null) {
          let leftSymbol = leftResult[1][0];
          let rightSymbol = rightResult[1][0];
          if (leftSymbol === rightSymbol) {
            let leftCount = 0;
            let rightCount = 0;
            for (let j = 0; j < leftResult[0].length; j++) {
              if (leftResult[0][j] === leftSymbol) {
                leftCount++;
              }
            }
            for (let j = 0; j < rightResult[0].length; j++) {
              if (rightResult[0][j] === rightSymbol) {
                rightCount++;
              }
            }
            console.log(
              `ticket "${ticket}" - ${Math.min(
                leftCount,
                rightCount
              )}${leftSymbol}`
            );
          } else {
            console.log(`ticket "${ticket}" - no match`);
          }
        } else {
          console.log(`ticket "${ticket}" - no match`);
        }
      }
    } else {
      console.log("invalid ticket");
    }
  }
}
solution(["th@@@@@@eemo@@@@@@ey"]);
