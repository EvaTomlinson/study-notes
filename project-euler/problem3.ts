// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(n) {
  return 0;
}
const exampleInput = 13195;
const expectedExampleOutput = 29;

const actualExampleOutput = largestPrimeFactor(exampleInput);
if (expectedExampleOutput == actualExampleOutput) {
  console.log("You got it!");
  const actualInput = 600851475143;
  const realOutput = largestPrimeFactor(actualInput);
  console.log("RealOutput is:", realOutput);
} else {
  console.log("Try a bit more");
  console.log("Actual example output is:", actualExampleOutput);
}
