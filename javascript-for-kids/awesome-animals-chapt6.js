//Write a for loop that modifies an array of animals, making them awesome! For example, if you starting array is 
//var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"]; then after you run your loop, it should look like this
//["Awesome Cat", "Awesome Fish", "Awesome Lemur", "Awesome Komodo Dragon"]

const animals = ["Dog", "Cat", "Tiger", "Egle", "turtle", "Elephant"];
for (let i = 0; i < animals.length; i++) {
  console.log("Awesome" + " " + animals[i]);
}