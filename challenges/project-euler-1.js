//////////////////////////////////////////////////////////////////////////////////
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we //
// get 3, 5, 6 and 9. The sum of these multiples is 23.                         //
//                                                                              //
// Write a function name `calculate` that returns the sum of all the multiples  //
// of 3 or 5 below the input parameter n.                                       //
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// Write your function below this line: //
//////////////////////////////////////////
function calculate (n) {
  let sum = 0; 
  // console.log("calc")
  for (let i = 1; i < n; i++) {
    // let remainder = i % 3;
    // if ((i % 3 == 0) || (i % 5 == 0) || (i % 3 == 0 && i % 5 == 0))
    if ((i % 3 == 0) || (i % 5 == 0))
      sum = sum + i;
      // console.log(sum);
    } 
    return sum;
  }
  // for (let f = 5; f < n; f++) {
  //   let remainder1 = f % 5;
  //   if (remainder1 == 0) {
  //     sum = sum + f;
  //     // console.log(sum);
  //   }
  // }
  


/////////////////////////////////////////////
// Do not modify anything below this line: //
/////////////////////////////////////////////
function testCalculate() {
  let input;
  let output;
  let expected;
  input = 10;
  output = calculate(input);
  expected = 23;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }
  input = 1000;
  output = calculate(input);
  expected = 233168;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }
  console.log("All tests passed!");
}

testCalculate()
