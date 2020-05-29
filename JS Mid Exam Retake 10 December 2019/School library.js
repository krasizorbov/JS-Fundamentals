function schoolLibrary(input = []) {
  let books = input.shift().split("&");
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" | ");
    let command = commands[0].split(" ");
    let book = commands[1];
    if (command[0] === "Add") {
      if (!books.includes(book)) {
        books.unshift(book);
      }
    } else if (command[0] === "Take") {
      if (books.includes(book)) {
        let index = books.indexOf(book);
        books.splice(index, 1);
      }
    } else if (command[0] === "Swap") {
      let book2 = commands[2];
      let index1 = books.indexOf(book);
      let index2 = books.indexOf(book2);
      if (
        index1 >= 0 &&
        index1 < books.length &&
        index2 >= 0 &&
        index2 < books.length
      ) {
        let tempBook = book;
        books[index1] = book2;
        books[index2] = tempBook;
      }
    } else if (command[0] === "Insert") {
      books.push(book);
    } else if (command[0] === "Check") {
      let index = +commands[1];
      if (index >= 0 && index < books.length) {
        console.log(books[index]);
      }
    } else if (command[0] === "Done") {
      console.log(books.join(", "));
    }
  }
}
schoolLibrary([
  "Anna Karenina&Heart of Darkness&Catch-22& The Stranger",
  "Add Book | David Copperfield",
  "Add Book | One Thousand and One Nights",
  "Swap Books | One Thousand and One Nights | Catch-22",
  "Take Book | David Copperfield",
  "Insert Book | The Stories of Anton Chekhov",
  "Check Book | 17",
  "Done",
  "",
]);
