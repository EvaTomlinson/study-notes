// How to run:
// yarn ts-node --project ./project-euler/tsconfig.json ./project-euler/problem20.ts
// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!

function sumOfDigitsInNumber(n: number) {
  return 0;
}
const exampleSumOfNumber = 27;
function testSumOfDigitsInNumber(n: number) {
  if (sumOfDigitsInNumber(n) == exampleSumOfNumber) {
    console.log("You passed the test.");
    console.log(sumOfDigitsInNumber(100));
  } else {
    console.log("You failed the test.");
  }
}

function factorial(n: number) {
  return 0;
}
const exampleFactorial = 10;
const exampleFactorialResult = 3628800;

function testFactorial(n: number) {
  if (factorial(n) == exampleFactorialResult) {
    console.log("Passed");
  } else {
    console.log("Failed.");
  }
}
