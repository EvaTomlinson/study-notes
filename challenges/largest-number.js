//////////////////////////////////////////////////////////////////////////////
// Write a function that returns the largest number in an array of numbers. //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// Write your function below this line: //
//////////////////////////////////////////
function max(numbers) {
  let largest = numbers[0];
  for (let index = 0; index <= numbers.length - 1; index = index + 1) {
    // console.log(numbers[index]);
    if (largest < numbers[index]) {
      largest = numbers[index];
    }
  }
  return largest;
}

/////////////////////////////////////////////
// Do not modify anything below this line: //
/////////////////////////////////////////////
function testMax() {
  let input, output, expected;
  input = [1, 2, 3, 4, 5];
  output = max(input);
  expected = 5;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [5, 4, 3, 2, 1];
  output = max(input);
  expected = 5;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [1, 2, 5, 4, 3];
  output = max(input);
  expected = 5;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [-10, -9, -8, -7];
  output = max(input);
  expected = -7;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [-7, -10, -8, -14, -20];
  output = max(input);
  expected = -7;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [100];
  output = max(input);
  expected = 100;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }
  console.log("Passed!");
}

testMax();
