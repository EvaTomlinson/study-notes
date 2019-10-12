// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(5);
// // console.log(wrap1());
// // console.log(wrap2());

/////////////////////////////////////////////////////

// function multiplier(factor) {
//   return number => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(10));
//////////////////////////////////////////////////

//examples of mine

function people(name) {
  return age => name + " " + "is" + " " + age;
}
let who = people("Eva");
console.log(who(28));

///////////////////////////////////////////////////
const peopleName = [Eva, Kurt, Dave, Darryl];
const peopleAge = ["28", "31", "30", "36"];

