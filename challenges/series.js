/////////////////////////////////////////////////////////////////////////////////
// The sum of all numbers between 4 and 12 is 4+5+6+7+8+9+10+11+12=72. Write a //
// function that takes two integer arguments. The function should return the   //
// sum of the numbers between those two numbers. Name the function `series`.   //
// The arguments may be given in any order. For example series(4, 12) should   //
// return the same result as series(12, 4).                                    //
/////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// Write your function below this line: //
//////////////////////////////////////////
function series(a, b) {
  let sum = 0;
  
  if (a > b) {
  } else {
  }
  for(let i = smaller; i <= bigger; i++) {
    sum = sum + i;
  }
  return sum;
}
// function series(a, b) {
//   let sum = 0;
//   let bigger;
//   let smaller;
  
//   if (a > b) {
//     bigger = a;
//     smaller = b;
//   } else {
//     bigger = b;
//     smaller = a;
//   }
//   for(let i = smaller; i <= bigger; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

/////////////////////////////////////////////
// Do not modify anything below this line: //
/////////////////////////////////////////////
function seriesTest() {
  let input, output, expected;
  input = [4, 12];
  output = series(...input);
  expected = 72;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [12, 4];
  output = series(...input);
  expected = 72;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [0, 100];
  output = series(...input);
  expected = 5050;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [1, 100];
  output = series(...input);
  expected = 5050;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [100, 0];
  output = series(...input);
  expected = 5050;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  input = [100,1];
  output = series(...input);
  expected = 5050;
  if (output != expected) {
    throw new Error(
      `Expected the result for input ${input} to be ${expected}. Got ${output} instead.`
    );
  }

  console.log("All tests passed!");
}

seriesTest();
