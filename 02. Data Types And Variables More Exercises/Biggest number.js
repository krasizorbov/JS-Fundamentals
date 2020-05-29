function biggest(a, b, c) {
  let points = [];
  points.push(a);
  points.push(b);
  points.push(c);
  points.sort(function (a, b) {
    return a - b;
  });
  console.log(points[2]);
}
biggest(2, 1, 5);
