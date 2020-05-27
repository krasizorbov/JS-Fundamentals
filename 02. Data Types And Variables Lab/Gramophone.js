function gramophone(bandName, albumName, songName) {
  let plateRotation = 2.5;
  let songDuration = (albumName.length * bandName.length * songName.length) / 2;
  let rotations = songDuration / plateRotation;
  console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
