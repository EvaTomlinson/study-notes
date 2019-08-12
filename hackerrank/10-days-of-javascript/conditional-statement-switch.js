function getLetter(s) {
  // let letter;
  switch (s[0]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
          return "A";
          break;
      case "b":
      case "c":
      case "d":
      case "f":
      case "g":
          return "B";
          break;
      case "h":
      case "j":
      case "k":
      case "l":
      case "m":
          return "C";
          break;
      default:
          return "D";
  }

  function getLetter(s) {
    let letter;
    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        default:
            letter = "D";
    }
    return letter;
  // return letter;
}
//     switch (s) {
//         case "a":
//          letter = "A";
//             break;
//         case "e":
//          letter = "A";
//             break;
//         case "i":
//          letter = "A";
//             break;
//         case "o":
//          letter = "A";
//             break;
//         case "u":
//          letter = "A";
//             break;

//     }
//     return letter;
// }