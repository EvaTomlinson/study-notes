// How to run:
// yarn ts-node project-euler/problem6.ts

//The sum of the squares of the first ten natural numbers is,
// 1^2+2^2+...+10^2=385

// The square of the sum of the first ten natural numbers is,
// (1+2+...+10)^2=55^2=3025

// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025−385=2640.

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

function sumOfSquares(naturalNumber: number) {
  return 0;
}

function testSumOfSquares() {
  const naturalNumber = 10;
  const expectedTestSumOfSquares = 385;
  if (sumOfSquares(naturalNumber) == expectedTestSumOfSquares) {
    console.log("It works!");
  } else {
    console.log("It failed.");
  }
}
testSumOfSquares();

function squareOfSum(naturalNumber: number) {
  return 0;
}

function testSquareOfSum() {
  const naturalNumber = 10;
  const expectedTestSquareOfSum = 3025;
  if (squareOfSum(naturalNumber) == expectedTestSquareOfSum) {
    console.log("You got it!");
  } else {
    console.log("Try again");
  }
}
testSquareOfSum();

function difference(naturalNumber: number) {
  return squareOfSum(naturalNumber) - sumOfSquares(naturalNumber);
}

function testDifference() {
  const expectedDifference = 2640;
  const naturalNumber = 10;
  if (difference(naturalNumber) == expectedDifference) {
    console.log("Working!");
  } else {
    console.log("Not working.");
  }
}
testDifference();
