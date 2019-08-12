// const friend = "Kurt"

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 6));











const myFunc = function(max, jump) {
  for(let i = jump; i <= max; i += jump) {
    console.log(i);
  }
};

myFunc(10, 3);



console.log((2 + 3) * 6)

const fn = function(num) {
  let result = 5;
  result += num * 2
  return result - 1;
}

console.log(fn(5))


const newFunc = function(a) {
  let c = a + 3;
}

console.log(newFunc(10))

