
  let input = "javascript is awesome";
  // console.log(input.length);
  let output = "";
  for(let k = 0; k < input.length; k++) {
    if (input[k] == "a") {
      output = output + "4";
      console.log(output);
    } else if (input[k] == "i") {
      output = output + "1";
      console.log(output);
    } else if (input[k] == "e") {
      output = output + "3";
      console.log(output);
    } else if (input[k] == "o") {
      output = output + "0";
      console.log(output);
    } else {
      output = output + input[k];
      console.log(output);
    }
  }
  console.log(output);

//In if statements, if a condition is true, it will stop runing, and if it's false, it will keep running to the next else if until it's true. 
//For-loop한바퀴를 돌면서 바꿔야할게 있을때 멈춰서 바꾸고 다시 처음으로돌아가서 바꿔야할게잇을때(즉 ture가 됬을때) 멈추고 다시 처음으로 돌아간다. 
//첨으로 돌아가면서 계속 1이 추가되면서 indext 0 부터 21까지 이작업을 계속 반복한다 그결과 j4v4scr1pt 1s 4w3s0m3를 갖게된다.