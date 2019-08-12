// while

str = "kurt is here"

let i = 0;
while (i < str.length) {
  console.log(i, str[i]);
  i++;
}

// for

for (let j = 0; j < str.length; j++) {
  console.log(j, str[j]);
}

//switch
function vowelsAndConsonants(s) {
  let i = 0
  while (i < s.length) {
      const thisLetter = s[i];
      console.log(thisLetter);
      i++;
      switch (thisLetter) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
              console.log(thisLetter);
              break;
          default:
              // consonant
      }
  }
}
//if
function vowelsAndConsonants(s) {
  let i = 0
  while (i < s.length) {
      const thisLetter = s[i];
      console.log(thisLetter);
      i++;
      if (thisLetter == "a" || thisLetter == "e" || thisLetter == "i" || thisLetter == "o" || thisLetter == "u") {
          console.log(thisLetter);
      } else if (thisLetter == "e") {
          console.log(thisLetter);
      } else if (thisLetter == "i") {
          console.log(thisLetter);
      } else if (thisLetter == "o") {
          console.log(thisLetter);
      } else if (thisLetter == "u") {
          console.log(thisLetter);
      } else {
          // consonant
      }
  }
}


function vowelsAndConsonants(s) {
  let i = 0
  while (i < s.length) {
      const thisLetter = s[i];
      // console.log(thisLetter);
      i++;
      switch (thisLetter) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
              console.log(thisLetter);
              break;
          default:
      }
  }

  i = 0;
  // console.log("---")
  while (i < s.length) {
      const thisLetter = s[i];
      // console.log(thisLetter);
      i++;
      //true || (thisLetter != "e")
      //true
      if ((thisLetter != "a") && (thisLetter != "e") && (thisLetter != "i") && (thisLetter != "o") && (thisLetter != "u")) {
          console.log(thisLetter);
      }
  }
}