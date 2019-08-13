// let age = 12;
// console.log("AGE 1", age)
// age = 10;
// console.log("AGE 2", age)

// var age = 12;
// var limitedAge = 13;
// var accompanied = true;

// age >= limitedAge;


function canSeeMovie(age, accompanied) {
  if (age >= 13) {
    return true;
  } else {
    // return accompanied
    if (accompanied) {
      return true;
    } else {
      return false;
    }
  }
}

function testCanSeeMovie() {
  let ages = [20, 5, 12, 13, 10]
  let accompanieds = [false, false, false, false, true]
  let expectedResults = [true, false, false, true, true]

  let index = 0
  while (index < ages.length) {
    let result = canSeeMovie(ages[index], accompanieds[index])
    if (result === expectedResults[index]) {
      console.log("pass")
    } else {
      console.log("FAIL")
    }
    index++
  }
}

testCanSeeMovie()



function isEven(number) {
  if (number % 2  === 0) {
    return true
  } else {
    return false
  }
}

function testIsEven() {
  let inputs = [79, 46, 13, 28, 39, 17]
  let expectedOutputs = [false, true, false, true, false, false]

  for (let index = 0; index <= inputs.length - 1; index++) {
    // console.log("inputs", inputs)
    // console.log("index", index)
    // console.log("inputs[index]", inputs[index])
    // console.log()
    let output = isEven(inputs[index])
    if (output === expectedOutputs[index]) {
      console.log("pass")
    } else {
      console.log("fail")
    }
  }
}

// function testIsEven() {
//   let input = 2
//   let output = isEven(input)
//   if (output == true) {
//     console.log("Yay!")
//   } else {
//     console.log("Nooo!")
//   }

//   input = 3
//   output = isEven(input)
//   if (output == false) {
//     console.log("Yay!")
//   } else {
//     console.log("Nooo!")
//   }

//   input = 7
//   output = isEven(input)
//   if (output == false) {
//     console.log("Yay!")
//   } else {
//     console.log("Nooo!")
//   }
// }

// testIsEven()
