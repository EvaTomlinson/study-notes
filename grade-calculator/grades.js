console.log("hello!");
// const idElement = document.querySelector("#test-count-id");
// const classElement = document.querySelector(".test-count-class");
// const dataElement = document.querySelector("[data-type]");

// console.log("idElement", idElement);
// console.log("classElement", classElement);
// console.log("dataElement", dataElement);

const quizCountElement = document.querySelector("[data-type='quiz-count']");
const quizWeightElement = document.querySelector("[data-type='quiz-weight']");
const quizGradeElements = document.querySelectorAll("[data-type='quiz-grade']");

const testCountElement = document.querySelector("[data-type='test-count']");
const testWeightElement = document.querySelector("[data-type='test-weight']");
const testGradeElements = document.querySelectorAll("[data-type='test-grade']");

const resultElement = document.querySelector("[data-type='results']");

// function inputHandler(event) {
//   console.log("inputHandler", event.target.value);
//   console.log("resultElement", resultElement);
//   console.log("quizCountElement", quizCountElement);
//   console.log("quizCountElement.value", quizCountElement.value);
//   resultElement.innerHTML = `Your grade: ${event.target.value}`;
// }

// console.log("testCountElement", testCountElement);

// testCountElement.addEventListener("input", inputHandler);

function calculate(event) {
  // console.log("calculate", event);

  const quizCount = Number(quizCountElement.value);
  const quizWeight = Number(quizWeightElement.value) / 100;
  const testCount = Number(testCountElement.value);
  const testWeight = Number(testWeightElement.value) / 100;

  const quizGrades = new Array(quizGradeElements.length);
  const testGrades = new Array(testGradeElements.length);

  for (let i = 0; i < quizCount; i++) {
    quizGrades[i] = Number(quizGradeElements[i].value);
  }
  for (let i = 0; i < testCount; i++) {
    testGrades[i] = Number(testGradeElements[i].value);
  }

  let quizGradeSum = 0;
  for (let i = 0; i < quizCount; i++) {
    quizGradeSum = quizGradeSum + quizGrades[i];
  }

  let testGradeSum = 0;
  for (let i = 0; i < testCount; i++) {
    testGradeSum = testGradeSum + testGrades[i];
  }

  const weightedQuizScore = quizGradeSum / quizCount * quizWeight;
  const weightedTestScore = testGradeSum / testCount * testWeight;

  const finalGrade = weightedQuizScore + weightedTestScore;

  resultElement.innerHTML = `Your grade: ${finalGrade}`;
}

function addInputListeners() {
  quizCountElement.addEventListener("input", calculate);
  quizWeightElement.addEventListener("input", calculate);
  for (let i = 0; i < quizGradeElements.length; i++) {
    quizGradeElements[i].addEventListener("input", calculate);
  }

  testCountElement.addEventListener("input", calculate);
  testWeightElement.addEventListener("input", calculate);
  for (let i = 0; i < testGradeElements.length; i++) {
    testGradeElements[i].addEventListener("input", calculate);
  }
}

addInputListeners();
