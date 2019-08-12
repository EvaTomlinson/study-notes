///////////////////////////////////////////////////////////////////////////////////
// Write a function named "quad" that implements the quadratic formula. It       //
// should take three arguments: a, b, and c. If the quadratic has two solutions, //
// it should return an array that contains both solutions. If the quadratic has  //
// one solution, it should return an array with only that one solution. If the   //
// quadratic has no solutions, it should throw an error with the message         //
// "no solutions".                                                               //
///////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// Write your function below this line: //
//////////////////////////////////////////
function quad(a, b, c){
  let A = -1 * b;
  let B = Math.pow(b, 2) - (4 * a * c)
  //console.log("What's B?", B);
  let C = 2 * a;

  let result1 = (A + Math.sqrt(B))/C
  let result2 = (A - Math.sqrt(B))/C
  // console.log(result1);
  // console.log(result2);

  if (B < 0){
    throw Error("no solutions")
  } else if (B == 0){
    return [result1]; 
  } else if (B > 0) {
    return [result1, result2];
  }
}

// answers = quad(1,2,2);
// console.log(answers)

/////////////////////////////////////////////
// Do not modify anything below this line: //
/////////////////////////////////////////////
function testQuad() {
  testQuadOneResult();
  testQuadTwoResults();
  testQuadZeroResults();
}

function testQuadOneResult() {
  let [a, b, c] = [4, 8, 4];
  let result = quad(a, b, c);
  if (!Array.isArray(result)) {
    throw new Error(
      `For input ${[
        a,
        b,
        c
      ]}, the return value should be an array. Returned value was ${result}.`
    );
  }
  if (result.length != 1) {
    throw new Error(
      `For input ${[
        a,
        b,
        c
      ]}, the return value should have length 1. Returned value was ${result}.`
    );
  }
  if (result[0] != -1) {
    throw new Error(
      `For input ${[
        a,
        b,
        c
      ]}, the return value should be [-1]. Returned value was ${result}.`
    );
  }
  console.log("Passed testQuadOneResult");
}

function testQuadTwoResults() {
  let [a, b, c] = [2, 10, 0];
  let result = quad(a, b, c);
  if (!Array.isArray(result)) {
    throw new Error(
      `For input ${[
        a,
        b,
        c
      ]}, the return value should be an array. Returned value was ${result}.`
    );
  }
  if (result.length != 2) {
    throw new Error(
      `For input ${[
        a,
        b,
        c
      ]}, the return value should have length 2. Returned value was ${result}.`
    );
  }
  if (result[0] != 0 || result[1] != -5) {
    if (result[0] != -5 || result[1] != 0) {
      throw new Error(
        `For input ${[
          a,
          b,
          c
        ]}, the return value should be [0, -5] or [-5, 0]. Returned value was ${result}.`
      );
    }
  }
  console.log("Passed testQuadTwoResults");
}

function testQuadZeroResults() {
  let [a, b, c] = [4, 3, 100];
  let caughtError = false;
  try {
    quad(a, b, c);
  } catch (error) {
    caughtError = true;
    if (!(error instanceof Error)) {
      throw new Error(
        `For input ${[
          a,
          b,
          c
        ]}, the function should throw an error. Type of thrown object is ${typeof error}.`
      );
    }
    if (error.message != "no solutions") {
      throw new Error(
        `For input ${[
          a,
          b,
          c
        ]}, the function should throw an error with the message 'no solutions'. The error has the message '${
          error.message
        }'.`
      );
    }
  } finally {
    if (!caughtError) {
      throw new Error(
        `For input ${[
          a,
          b,
          c
        ]}, the function should throw an error. Nothing was thrown.`
      );
    }
  }
  console.log("Passed testQuadZeroResults");
}

testQuad();
