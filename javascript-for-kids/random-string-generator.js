//Make a random stirng generator. You will need to start with a string containing all the letters in the alphabet.
//const alphabet = "abcdefghijklmnopqrstuvwxyz";

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const randomeString = "";
// (Math.floor(Math.random() * alphabet.length));
// while (alphabet < 6) {
//   randomeString = randomeString + alphabet;
//   console.log(randomeString);
// }

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";

// for (let i = 0; i < 6; i++) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString)

//How can I know where the Math.floor thing goes there?

// let alphabet;
// alphabet = "abcdefghijklmnopqrstuvwxyz";

let alphabet = "abcdefghijklmnopqrstuvwxyz"
let randomString = "";

let counter = 0;

// while (counter++ < 5) console.log(counter)
// counter = 0;

while (counter < 6) {
  counter++;
  const newLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log("newLetter", newLetter);
  randomString += newLetter;
}

console.log("randomString", randomString);

//; semicolon means it's in the end of a statement.
//What did I learn today?
// I learned that semicolon makes the while loop running infinitely. Because it means that it's the end of a statement.
// I learned that when I used a while loop, I have to declare first then assign before the while loop. Otherwise, the loop will run infinitely. 