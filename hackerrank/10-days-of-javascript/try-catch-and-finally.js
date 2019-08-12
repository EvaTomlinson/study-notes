function reverseString(s) {
  try {
      s = s.split("").reverse().join("");
      //console.log(s);
  }
  catch (e) {
      console.log(e.message);
  }
  finally {
      console.log(s);
  }
}


-----------------------------------------------
function reverseString(s) {
  let reversed = s;
  try {
      reversed = s.split("").reverse().join("");
  }
  catch (e) {
      console.log(e.message);
  }
  finally {
      console.log(reversed);
  }
}
