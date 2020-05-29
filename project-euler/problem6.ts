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

function sumOfSquares(maximumNumber: number) {
  let resultOfSumOfSquares = 0;
  for (let integer = 1; integer <= maximumNumber; integer++) {
    resultOfSumOfSquares = resultOfSumOfSquares + integer ** 2;
  }
  return resultOfSumOfSquares;
}

function testSumOfSquares() {
  const maximumNumber = 10;
  const expectedTestSumOfSquares = 385;
  if (sumOfSquares(maximumNumber) == expectedTestSumOfSquares) {
    console.log("It works!");
  } else {
    console.log("It failed.");
  }
}
testSumOfSquares();

function squareOfSum(maximumNumber: number) {
  let resultOfSquaredOfSum = 0;
  let sum = 0;
  for (let integer = 1; integer <= maximumNumber; integer++) {
    sum = sum + integer;
  }
  resultOfSquaredOfSum = sum ** 2;
  return resultOfSquaredOfSum;
}

function testSquareOfSum() {
  const maximumNumber = 10;
  const expectedTestSquareOfSum = 3025;
  if (squareOfSum(maximumNumber) == expectedTestSquareOfSum) {
    console.log("You got it!");
  } else {
    console.log("Try again");
  }
}
testSquareOfSum();

function difference(maximumNumber: number) {
  return squareOfSum(maximumNumber) - sumOfSquares(maximumNumber);
}

function testDifference() {
  const expectedDifference = 2640;
  const maximumNumber = 10;
  if (difference(maximumNumber) == expectedDifference) {
    console.log("Working!");
    console.log("The answer is", difference(100));
  } else {
    console.log("Not working.");
  }
}
testDifference();
