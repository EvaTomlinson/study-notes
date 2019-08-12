const input = "This is my fancy error.";

function throwMyError() {
  // Generate an exception with a value read from stdin
  const error = new Error(input);
  throw error;
}

try {
  throwMyError();
} catch (e) {
  console.log(e.message);
}
-----------------------------------------------------------------------------------
function isPositive(a) {
  if (a > 0) {
      return "YES"
  } else if (a === 0) {
      throw new Error("Zero Error");
  } else if (a < 0) {
      throw new Error("Negative Error");
  }
}
