$(document).ready(function() {
    function randomInteger(minValue, maxValue) {
        let numberOfResults = maxValue - minValue + 1;
        let offset = minValue;
        return Math.floor(Math.random() * numberOfResults + offset);
    }
      
    let randomNumber = randomInteger(1, 5);
    console.log("randomNumber", randomNumber);
    console.log("typeof randomNumber", typeof randomNumber);

    function checkGuess(guess) {
        console.log(guess)
        console.log("typeof guess", typeof guess);
        if (randomNumber === Number(guess)) {
            console.log("You got it!");
            $('#responseText').text("You got it!");
        } else {
            console.log("See ya!");
            $('#responseText').text("See ya!");
        }
    }

    $('.guessingForm').submit(function(event) {
        event.preventDefault();
        var guess = $('#js-user-guess').val();
        $('#js-user-guess').val('');
        checkGuess(guess);
    });
});

// Possible additions
// 1. Tracking number of guesses
// 2. Hot or cold (more if statements)
// 3. New game/reset button
