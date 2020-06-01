// How to run:
// yarn ts-node --project ./project-euler/tsconfig.json ./project-euler/problem16.ts

//2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

//What is the sum of the digits of the number 2^1000?

export function resultOfSumOfDigits(exponent: number) {
  let resultOfExponentiation = (BigInt(2) ** BigInt(exponent)).toString();
  let sum = 0;
  for (let i = 0; i < resultOfExponentiation.length; i++) {
    sum = sum + Number(resultOfExponentiation[i]);
  }
  return sum;
}
const exampleExpectedSum = 26;
const exampleExponent = 15;
if (resultOfSumOfDigits(exampleExponent) == exampleExpectedSum) {
  console.log("Passed resultOfSumOfDigits test");
  console.log("The result is", resultOfSumOfDigits(1000));
} else {
  console.log("Failed resultOfSumOfDigits test");
}
