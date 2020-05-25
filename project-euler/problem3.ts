// How to run:
// yarn ts-node project-euler/problem3.ts

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(n) {
  let divisor = 2;
  let lpf = 0;
  while (divisor < n) {
    const quotient = n / divisor;
    const remainder = n % divisor;
    if (remainder !== 0) {
      // divisor is not a factor of n
      // quotient is not an integer
      divisor++;
    } else {
      // divisor is a factor of n
      // quotient is a factor of n
      n = n / divisor;
      if (isPrime(divisor)) {
        // divisor is a prime factor of n
        if (divisor > lpf) {
          // updating largest prime factor from divisor
          lpf = divisor;
        }
      }
      if (isPrime(quotient)) {
        // quotient is a prime factor of n
        if (quotient > lpf) {
          // updating largest prime factor from quotient
          lpf = quotient;
          break;
        }
      }
    }
  }

  return lpf;
}
function isPrime(n) {
  for (let i = 2; i < n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
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
