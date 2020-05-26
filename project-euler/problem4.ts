// How to run:
// yarn ts-node project-euler/problem4.ts

// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome(digits: number) {
  let start = 10 ** (digits - 1);
  let stop = 10 ** digits - 1;
  let product: number;
  let currentLargestPalindrome = 0;
  for (let a = start; a <= stop; a++) {
    for (let b = a; b <= stop; b++) {
      product = a * b;
      if (isPalindrome(product)) {
        if (currentLargestPalindrome < product) {
          currentLargestPalindrome = product;
          currentLargestPalindrome;
        }
      }
    }
  }
  return currentLargestPalindrome;
}

const digits = 2;
if (largestPalindrome(digits) == 9009) {
  console.log("It works!");
  console.log("Result for 3 digits is:", largestPalindrome(3));
} else {
  console.log("Failed");
}

function isPalindrome(n: number) {
  const forward = n.toString();
  const reverse = forward.split("").reverse().join("");

  return forward == reverse;
}

const samplePalindrome = 9009;
if (isPalindrome(samplePalindrome) == true) {
  console.log("isPalindrome is working which is true.");
} else {
  // throw "WRONG!!!";
  console.log("did not identify a palindrome");
}

const notPalindrome = 12;
if (isPalindrome(notPalindrome) == false) {
  console.log("isPalindrome is working which is false.");
} else {
  // throw "WRONG!!!";
  console.log("did not identify a non-palindrome.");
}
