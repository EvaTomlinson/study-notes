//creat an array of words
  const words = ["Engineer", "Watermelon", "Calculator", "Komeri", "Massage","Roadtrip"];
  //pick a random word
  let word = words[Math.floor(Math.random() * words.length)];
  let convert = word.toLowerCase();
  //Set up the answer array
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  // console.log(answerArray);
  let remainingLetters = word.length;
  let maximumGuess = 20;
  //the game loop
  while(remainingLetters > 0 && maximumGuess > 0) {
    //show the player their progress
    alert(answerArray.join(" "));
    // get a guess from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
      //exit the game loop
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      maximumGuess--;
      //update the game state with the guess
      for (let j = 0; j < convert.length; j++) {
        if (convert[j] === guess && answerArray[j] === "_") {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    } 
    //the end of the game loop
  }
  //show the answer and congratulate the player
  alert(anwerArray.join(" "));
  if (maximumGuess > 0) {
    alert("Good job! the answer was " + convert);
  } else {
    alert("Sorry you ran out of guesses. The answer was" + convert);
  }