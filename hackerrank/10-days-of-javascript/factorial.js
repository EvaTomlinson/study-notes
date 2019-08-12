// function factorial(n){
//   let result = 1
//   while (n<4){
//     result = result * n
//     n = n + 1

//   }
//   return result;
// }
// // factorial(1);
// console.log(factorial(10));

function factorial(n) {
  let i = 1
  let result = 1;
  while(i <= n) {
    console.log(i)
    result *= i
    i = i + 1
  }

  return result
}
console.log(factorial(10));