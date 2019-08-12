const randomBodyParts = ["Boobs", "Butt", "asshole", "hands", "knees"];
const randomAdjectives = ["Poor", "Shitty", "Sad", "Smelly"];
const randomWords = ["Rat", "Albino", "Toilet", "Pale", "Fat", "Poop"];
const randomcurses = ["Fuck", "Shoot", "Puss", "Dang"];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
const randomWord = randomWords[Math.floor(Math.random() * 6)];
const randomcurse = randomcurses[Math.floor(Math.random() * 4)];

// const randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
// console.log(randomInsult);

const randomInsults = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!", randomcurse].join(" ");
console.log(randomInsults);