function getGrade(score) {

  // if (score == 15) {
  //     console.log("fifteen")
  // } else console.log("not fifteen")

  let grade;
  if (score <= 5) {
      grade = "F"
  } else if (score <= 10) {
      grade = "E"
  } else if (score <= 15) {
      grade = "D"
  } else if (score <= 20) {
      grade = "C"
  } else if (score <= 25) {
      grade = "B"
  } else {
      grade = "A"
  }
  return grade;




  // let grade;
  // if (score <= 5) {
  //     grade = "F"
  // } else {
  //     if (score <= 10) {
  //         grade = "E"
  //     } else {
  //         if (score <= 15) {
  //             grade = "D"
  //         } else {
  //             if (score <= 20) {
  //                 grade = "C"
  //             } else {
  //                 if (score <= 25) {
  //                     grade = "B"
  //                 } else {
  //                     if (score <= 30) {
  //                         grade = "A"
  //                     }
  //                 }
  //             }
  //         }
  //     }
  // }
  // return grade;



  // let grade;
  // if (score <= 30) {
  //     grade = "A"
  // }
  // if (score <= 25) {
  //     grade = "B"
  // }
  // if (score <= 20) {
  //     grade = "C"
  // }
  // if (score <= 15) {
  //     grade = "D"
  // }
  // if (score <= 10) {
  //     grade = "E"
  // }
  // if (score <= 5) {
  //     grade = "F"
  // }
  // return grade;
}