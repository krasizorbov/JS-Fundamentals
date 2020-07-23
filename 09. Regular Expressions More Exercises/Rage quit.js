function solution(input = []) {
  let str = "";
  let globalPattern = /[\D]+([0-9]+)/g;
  input = input.shift().match(globalPattern);
  if (input !== null) {
    let pattern = /([\D]+)([0-9]+)/;
    for (let i = 0; i < input.length; i++) {
      let result = input[i].match(pattern);
      let sub = result[1].toUpperCase();
      let count = result[2];
      str += sub.repeat(count);
    }
    let reduced = Array.from(new Set(str));
    console.log(`Unique symbols used: ${reduced.length}`);
    console.log(str);
  }
}
solution([
  'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15',
]);
