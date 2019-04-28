// for (number = 0; number <= 100; number++) {
//   if (number % 3 === 0 && number % 5 === 0){
//     console.log("FizzBuzz"); 
//   } else if(number % 3 === 0) {
//     console.log("Fizz");
//   } else if (number % 5 === 0){
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
// }

//The if  will do only the first true thing. That's why I have to write #2 fisrt! 
// plural means it is an array, so I would change numbers to number.










// function printFizzBuzz(number){
//   if (number % 3 === 0 && number % 5 === 0){
//     console.log("FizzBuzz"); 
//   } else if(number % 3 === 0) {
//     console.log("Fizz");
//   } else if (number % 5 === 0){
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
// }


// for (number = 0; number <= 100; number++) {
//   printFizzBuzz(number);
// }








// let a = 1;
// let b = 2;

// c = add(a, b)

// console.log(c)

// d = subtract(a, b)

// console.log(d)

// function add(left, right) {
//   return left + right
// }

// function subtract(first, second) {
//   return first - second
// }

// function print(input) {
//   console.log("print: " + input)
// }

// print(a)
// print(b)
// print(c)
// e = print(d)

// console.log(e)






  // if (number % 3 === 0 && number % 5 === 0){
  //   console.log("FizzBuzz"); 
  // } else {
  //   if (number % 3 === 0) {
  //     console.log("Fizz");
  //   } else {
  //     if (number % 5 === 0){
  //       console.log("Buzz");
  //     } else {
  //       console.log(number);
  //     }
  //   }
  // }










// function fizzBuzz(number){
//   if (number % 3 === 0 && number % 5 === 0){
//     // console.log("FizzBuzz");
//     return "FizzBuzz";
//   } else if(number % 3 === 0) {
//     // console.log("Fizz");
//     return "Fizz";
//   } else if (number % 5 === 0){
//     // console.log("Buzz");
//     return "Buzz";
//   } else {
//     // console.log(number);
//     return number;
//   }
// }


// for (number = 0; number <= 20; number++) {
//   let result = fizzBuzz(number);
//   console.log("result: " + result);
// }

//When a function doesn't have a return and I try to print the output, it will give me undefined.













function greeting(name) {
  return "hello " + name
}


let g = greeting("kurt")

let h = g.toUpperCase()

console.log(h)



function f(x) {
  return x^2 + 2 * x + 3;
}



f(5)