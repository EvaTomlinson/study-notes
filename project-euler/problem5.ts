// How to run:
// yarn ts-node project-euler/problem5.ts

// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

function smallestNumberDivisibleByUpToN(maximumDivisor: number) {
  let dividend = maximumDivisor;
  while (!isDivisibleByNumbers(maximumDivisor, dividend)) {
    dividend++;
  }
  return dividend;
}

const testMaximumDivisor = 10;
const testDividend = 2520;
const expectedResult = 2520;
if (smallestNumberDivisibleByUpToN(testMaximumDivisor) == expectedResult) {
  console.log("You got it!");
  console.log(
    "smallest number divisible by 1 to 20 is",
    smallestNumberDivisibleByUpToN(20)
  );
} else {
  console.log("Try it again.");
}

function isDivisibleByNumbers(maximumDivisor: number, dividend: number) {
  let divisor = 2;
  while (divisor <= maximumDivisor) {
    if (dividend % divisor == 0) {
      divisor++;
    } else {
      return false;
    }
  }
  return true;
}

if (isDivisibleByNumbers(testMaximumDivisor, testDividend) == true) {
  console.log("It works!");
} else {
  console.log("It failed.");
}

const nonDivisibleDividend = 2522;
if (isDivisibleByNumbers(testMaximumDivisor, nonDivisibleDividend) == false) {
  console.log("It works!");
} else {
  console.log("It failed.");
}
