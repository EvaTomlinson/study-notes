// How to run:
// yarn ts-node project-euler/problem10.ts

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

export function sumOfPrimes(maximumNumber: number) {
  let sum = 0;
  for (let i = 1; i < maximumNumber; i++) {
    if (isPrime(i) == true) {
      sum = sum + i;
    }
  }
  return sum;
}

function testSumOfPrime() {
  const exampleSum = 17;
  const exampleMaximum = 10;
  if (sumOfPrimes(exampleMaximum) == exampleSum) {
    console.log("You got this!");
    console.log(sumOfPrimes(2000000));
  } else {
    console.log("Try harder.");
  }
}
testSumOfPrime();

function isPrime(n: number) {
  if (n == 1) {
    return false;
  }
  for (let i = 2; i < n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function testIsPrime() {
  const examplePrimeNumber = 13;
  if (isPrime(examplePrimeNumber) == true) {
    console.log("It works!");
  } else {
    console.log("Failed");
  }
}
testIsPrime();

function testIsPrimeWithComposite() {
  const exampleComposite = 16;
  if (isPrime(exampleComposite) == false) {
    console.log("Working!");
  } else {
    console.log("Not working.");
  }
}
testIsPrimeWithComposite();

function testOne() {
  const exampleN = 1;
  if (isPrime(exampleN) == false) {
    console.log("testOne Working!");
  } else {
    console.log("testOne Not working.");
  }
}
testOne();
