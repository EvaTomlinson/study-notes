////////////////////////////////////////////////////////////////////////////////
// Modify your solution to `rot13-part-one.js` to export the function         //
// `rot13Char`. Import that function here. Use it in a new function called    //
// `rot13String` to process entire strings instead of only single characters. //
// To clarify, your new function should take one parameter, a string, and     //
// return a string where each character of the string has been passed through //
// the function `rot13Char`.                                                  //
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// Import the function `rot13Char` below this line: //
//////////////////////////////////////////////////////

//////////////////////////////////////////
// Write your function below this line: //
//////////////////////////////////////////

/////////////////////////////////////////////
// Do not modify anything below this line: //
/////////////////////////////////////////////
function testRot13String() {
  const input =
    "qwertyuiopasdfghjklzxcvbnm1234567890-=[];',./`!@#$%^&*()_+{}|:\"<>?~";
  const expected =
    "djreglhvbcnfqstuwxymkpioaz1234567890-=[];',./`!@#$%^&*()_+{}|:\"<>?~";
  let output = rot13String(input);
  if (output != expected) {
    throw new Error(
      `For input '${input}', expected '${expected}'. Got '${output}' instead.`
    );
  }

  console.log("All tests passed!");
}

testRot13String();
