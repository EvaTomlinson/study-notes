// How to run:
// yarn ts-node project-euler/problem7.ts

//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.

// What is the 10 001st prime number?
function nthPrimeNumber(n: number) {
  let count = 0;
  let i = 2;
  while (count < n) {
    console.log("nthPrimeNumber -> i", i);
    if (isPrime(i) == true) {
      count++;
      console.log("nthPrimeNumber -> count", count);
    }
    i++;
  }
  return i - 1;
}
function testNthPrimeNumber() {
  const exampleN = 6;
  if (nthPrimeNumber(exampleN) == 13) {
    console.log("Working");
    console.log(nthPrimeNumber(10001));
  } else {
    console.log("Failed.");
  }
}
testNthPrimeNumber();

function isPrime(n: number) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
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
