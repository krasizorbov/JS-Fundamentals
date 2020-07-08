function solution(input = []) {
  let map = new Map();
  let count = +input.shift();
  for (let i = 0; i < count; i++) {
    let line = input[i].split("|");
    let carName = line[0];
    let mileage = +line[1];
    let fuel = +line[2];
    let obj = { mileage: mileage, fuel: fuel };
    map.set(carName, obj);
  }
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" : ");
    let command = line[0];
    if (command === "Drive") {
      let carName = line[1];
      let distance = +line[2];
      let fuel = +line[3];
      let car = map.get(carName);
      if (fuel > car.fuel) {
        console.log("Not enough fuel to make that ride");
      } else if (fuel <= car.fuel) {
        car.fuel -= fuel;
        car.mileage += distance;
        console.log(
          `${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
        if (car.mileage >= 100000) {
          console.log(`Time to sell the ${carName}!`);
          map.delete(carName);
        }
      }
    } else if (command === "Refuel") {
      let carName = line[1];
      let fuel = +line[2];
      let car = map.get(carName);
      if (car.fuel + fuel > 75) {
        let additionalFuel = 75 - car.fuel;
        car.fuel = 75;
        console.log(`${carName} refueled with ${additionalFuel} liters`);
      } else {
        car.fuel += fuel;
        console.log(`${carName} refueled with ${fuel} liters`);
      }
    } else if (command === "Revert") {
      let carName = line[1];
      let kilometers = +line[2];
      let car = map.get(carName);
      if (car.mileage - kilometers >= 10000) {
        car.mileage -= kilometers;
        console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
      } else {
        car.mileage = 10000;
      }
    } else if (command === "Stop") {
      break;
    }
  }
  map = new Map(
    [...map.entries()].sort(
      (a, b) => sortByMileage(a, b) || sortByCarName(a, b)
    )
  );
  for (const entries of map) {
    console.log(
      `${entries[0]} -> Mileage: ${entries[1].mileage} kms, Fuel in the tank: ${entries[1].fuel} lt.`
    );
  }
  function sortByMileage(a, b) {
    return b[1].mileage - a[1].mileage;
  }
  function sortByCarName(a, b) {
    return a[0].localeCompare(b[0]);
  }
}
solution([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
