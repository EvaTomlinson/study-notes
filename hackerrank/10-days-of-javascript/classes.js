class Rectangle {
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }
  perimeter() {
    return 2*this.height + 2*this.width
  };
  static sizeDifference(rect1, rect2) {
    let size1 = rect1.width * rect1.height
    let size2 = rect2.width * rect2.height
    if (size1 >= size2) {
      return size1 - size2;
    } else {
      return size2 - size1;
    }
  };
  instanceSizeDifference(rect2) {
    let size1 = this.width * this.height
    let size2 = rect2.width * rect2.height
    if (size1 >= size2) {
      return size1 - size2;
    } else {
      return size2 - size1;
    }
  };
}


let r1 = new Rectangle(1, 2);
let r2 = new Rectangle(2, 2);
let r3 = new Rectangle(10, 2);

let answers = [
  Rectangle.sizeDifference(r1, r2),
  Rectangle.sizeDifference(r2, r3),
  Rectangle.sizeDifference(r1, r3),
];

console.log(answers);








// class Rectangle {
//   constructor(h, w) {
//     this.height = h;
//     this.width = w;
//   }
// }

// function perimeter(rect) {
//   return 2*rect.height + 2*rect.width
// };

// let r1 = new Rectangle(1, 2);
// let r2 = new Rectangle(2, 2);
// let r3 = new Rectangle(10, 2);

// let answers = [
//   perimeter(r1),
//   perimeter(r2),
//   perimeter(r3),
// ];

// console.log(answers);









// class Rectangle {
//   constructor(h, w) {
//     this.height = h;
//     this.width = w;
//   }
//   perimeter() {
//     return 2*this.height + 2*this.width
//   };
// }

// let r1 = new Rectangle(1, 2);
// let r2 = new Rectangle(2, 2);
// let r3 = new Rectangle(10, 2);

// let answers = [
//   r1.perimeter(),
//   r2.perimeter(),
//   r3.perimeter(),
// ];

// console.log(answers);
