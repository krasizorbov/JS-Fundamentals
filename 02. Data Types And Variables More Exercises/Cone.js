function cone(radius, height) {
  let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  let lsurfice =
    Math.PI * radius * Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
  let bsurface = Math.PI * Math.pow(radius, 2);
  let totalsurface = lsurfice + bsurface;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalsurface.toFixed(4)}`);
}
