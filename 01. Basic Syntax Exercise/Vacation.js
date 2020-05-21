function vacation(num, type, day) {
  let totalPrice = 0;
  switch (day) {
    case "Friday":
      if (type == "Students") {
        if (num < 30) {
          totalPrice = (num * 8.45).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = (num * 8.45 - num * 8.45 * 0.15).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      if (type == "Business") {
        if (num < 100) {
          totalPrice = (num * 10.9).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = ((num - 10) * 10.9).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      if (type == "Regular") {
        if (num >= 10 && num <= 20) {
          totalPrice = (num * 15 - num * 15 * 0.05).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = (num * 15).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      break;
    case "Saturday":
      if (type == "Students") {
        if (num < 30) {
          totalPrice = (num * 9.8).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = (num * 9.8 - num * 9.8 * 0.15).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      if (type == "Business") {
        if (num < 100) {
          totalPrice = (num * 15.6).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = ((num - 10) * 15.6).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      if (type == "Regular") {
        if (num >= 10 && num <= 20) {
          totalPrice = (num * 20 - num * 20 * 0.05).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = (num * 20).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      break;
    case "Sunday":
      if (type == "Students") {
        if (num < 30) {
          totalPrice = (num * 10.46).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = (num * 10.46 - num * 10.46 * 0.15).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      if (type == "Business") {
        if (num < 100) {
          totalPrice = (num * 16).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = ((num - 10) * 16).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      if (type == "Regular") {
        if (num >= 10 && num <= 20) {
          totalPrice = (num * 22.5 - num * 22.5 * 0.05).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        } else {
          totalPrice = (num * 22.5).toFixed(2);
          console.log(`Total price: ${totalPrice}`);
        }
      }
      break;
    default:
      break;
  }
}
vacation(30, "Students", "Sunday");
