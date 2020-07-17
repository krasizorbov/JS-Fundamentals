function solution(input = []) {
  let str = input.shift();
  let pattern = input.shift();
  while (str.length > 0 && pattern.length > 0) {
    let first = str.indexOf(pattern);
    let last = str.lastIndexOf(pattern);
    if (first >= 0 && last >= 0 && first !== last) {
      console.log("Shaked it.");
      let sub1 = str.substring(0, first);
      let sub2 = str.substring(first + pattern.length);
      str = sub1 + sub2;
      last = str.lastIndexOf(pattern);
      sub1 = str.substring(0, last);
      sub2 = str.substring(last + pattern.length);
      str = sub1 + sub2;
      let pat1 = pattern.substring(0, pattern.length / 2);
      let pat2 = pattern.substring(pattern.length / 2 + 1);
      pattern = pat1 + pat2;
    } else {
      break;
    }
  }
  console.log("No shake.");
  console.log(str);
}
solution(["astalavista baby", "sta", ""]);
