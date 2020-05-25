// How to run:
// yarn ts-node project-euler/problem1.ts

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

export function sumOfMultiples(n) {
  let i = 0;
  let sum = 0;
  for (i = 3; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

const exampleInput = 10;
const exampleOutput = 23;

const exampleResult = sumOfMultiples(exampleInput);
if (exampleOutput === exampleResult) {
  const realInput = 1000;
  const realResult = sumOfMultiples(realInput);
  console.log("I got it!");
  console.log("realResult", realResult);
} else {
  console.log("You can do better!");
  console.log("exampleResult", exampleResult);
}
