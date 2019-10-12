function numberToCharacter(number) {
  const characterList = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]

  return characterList[number];
}


function convertFromDecimal(decimal, base) {
  let output = "";
  let n = 0;
  while(Math.pow(base, n) <= decimal) {
    n++;
  }
  let m = n;
  console.log("(step 3) m", m);
  console.log("(step 4) m", m);
  while (m > 0) {
    m--;
    let positionValue = Math.pow(base, m);
    console.log("(step 6) positionValue", positionValue);
    let digitValue = Math.floor(decimal / positionValue);
    console.log("(step 7) digitValue", digitValue);
    output = output + numberToCharacter(digitValue);
    console.log("(step 8) output", output);
    decimal = decimal - digitValue * positionValue;
    console.log("(step 9) decimal", decimal);
  }
  return output;
}







































function testConvertFromDecimal() {
  const inputs = [
    {
      number: 1853,
      base: 16,
    },
    {
      number: 1853,
      base: 8,
    },
    {
      number: 1853,
      base: 2,
    },
  ];
  const expecteds = [
    "73D",
    "3475",
    "11100111101",
  ];

  for (let i = 0; i < inputs.length; i++) {
    const number = inputs[i].number;
    const base = inputs[i].base;
    const result = convertFromDecimal(number, base);
    if (result == expecteds[i]) {
      console.log("pass");
    } else {
      throw Error(`Failed for input ${JSON.stringify(inputs[i])}. Expected: ${expecteds[i]}. Got: ${result}.`)
    }
  }
}

testConvertFromDecimal();
