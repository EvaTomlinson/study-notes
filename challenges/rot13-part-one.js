//////////////////////////////////////////////////////////////////////////////////
// Write a function that takes a single character as an argument. If the        //
// argument is not a string, raise an error with the message "input must be a   //
// string". If the input string is longer than one character, raise an error    //
// with the message "input must be exactly one character". If the input is a    //
// letter, return the letter that comes 13 places later than it in the          //
// alphabet. (For example, "a" becomes "n", "b" becomes "o", and "c" becomes    //
// "p".) For letters later in the alphabet, you should wrap around at the end   //
// of the alphabet. (For example, "x" becomes "k", "y" becomes "l" and "z"      //
// becomes "m".) Preserve the case of the input letter when selecting your      //
// output letter. (For example, "a" becomes "n" and "A" becomes "N".) Any       //
// characters that are not letters should be returned exactly as they are. Your //
// function should be called "rot13Char".                                       //
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// Write your function below this line: //
//////////////////////////////////////////

function rot13() {
  if (rot13 !== " ") {
    throw new error (
      "input must be a string."
    ); 
  } else if (rot13 !== 1){
    throw new error (
      "input must be exactly one character."
    );
  } else {
    return input = 13 + input;
  }
}

/////////////////////////////////////////////
// Do not modify anything below this line: //
/////////////////////////////////////////////
function testRot13Char() {
  const inputs =
    "qwertyuiopasdfghjklzxcvbnm1234567890-=[];',./`!@#$%^&*()_+{}|:\"<>?~";
  const expectedOutput =
    "djreglhvbcnfqstuwxymkpioaz1234567890-=[];',./`!@#$%^&*()_+{}|:\"<>?~";
  let output;
  for (let i = 0; i < inputs.length; i++) {
    if (rot13Char(inputs[i]) != expectedOutput[i]) {
      throw new Error(
        `For input '${inputs[i]}, got '${rot13Char(inputs[i])}'. Expected '${
          expectedOutput[i]
        }'`
      );
    }
  }

  let result;
  let input;
  try {
    input = 42;
    result = rot13Char(input);
    if (!errorWasThrown) {
      throw Error(
        `Expected an error to be thrown for ${input}. Instead ${result} was returned.`
      );
    }
  } catch (error) {
    errorWasThrown = true;
    if (!(error instanceof Error)) {
      throw Error(
        `Expected an error object to be thrown for ${input}. Thrown object type was ${typeof error}.`
      );
    }
    if (error.message != "input must be a string") {
      throw Error(
        `Expected error message to be 'input must be a string' for ${input}. Error message was ${
          error.message
        }.`
      );
    }
  }
  try {
    input = "hello";
    result = rot13Char(input);
    if (!errorWasThrown) {
      throw Error(
        `Expected an error to be thrown for ${input}. Instead ${result} was returned.`
      );
    }
  } catch (error) {
    errorWasThrown = true;
    if (!(error instanceof Error)) {
      throw Error(
        `Expected an error object to be thrown for ${input}. Thrown object type was ${typeof error}.`
      );
    }
    if (error.message != "input must be exactly one character") {
      throw Error(
        `Expected error message to be 'input must be exactly one character' for ${input}. Error message was ${
          error.message
        }.`
      );
    }
  }

  console.log("All tests passed!");
}

testRot13Char();
