function fib(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let prevPrev = 0;
  let prev = 1;
  let current;
  while (n > 1) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
    n--;
  }
  return current;
}

for(let n = 0; n < 50; n++) {
  console.log(n, fib(n));
}

// console.log(0, fib(0));
// console.log(1, fib(1));
// console.log(2, fib(2));
// console.log(3, fib(3));
// console.log(4, fib(4));
// console.log(5, fib(5));
// console.log(6, fib(6));
// console.log(7, fib(7));
// console.log(48, fib(48));
// console.log(49, fib(49));
// console.log(50, fib(50));



// function fib(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   let prevPrev = 0;
//   let prev = 1;
//   let current;
//   let counter = 0;
//   while (counter < n) {
//     current = prev + prevPrev;
//     prevPrev = prev;
//     prev = current;
//     counter++;
//   }
//   return 
// }


