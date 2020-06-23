function towns(array = []) {
  class Town {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  for (let i = 0; i < array.length; i++) {
    let arr = array[i].split(" | ");
    let name = arr[0];
    let latitude = +arr[1];
    let longitude = +arr[2];
    town = new Town(name, latitude, longitude);
    console.log(
      `{ town: '${town.name}', latitude: '${latitude.toFixed(
        2
      )}', longitude: '${longitude.toFixed(2)}' }`
    );
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
