const input = require("readline-sync");

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? ",
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswers //
  // Replace your code with a loop that asks
  // each question in the array and stores the user’s responses.

  // this needs to go through the array and input the index of the array, corresponding to a question, in order to ask each question
  // update the variable question to the different questions in the questions array

  //   let i = 0;

  // while (i < 51) {
  //    console.log(i);
  //    i++;
  // }

  //   for (let i = 0; i < 51; i++) {
  //     console.log(i);
  //  }

  for (let i = 0; i < questions.length; i++) {
    let answer = input.question(`${questions[i]}`);
    candidateAnswers.push(answer);
  }

  //   let name = "LaunchCode";

  // for (let i = 0; i < name.length; i++) {
  //    console.log(name[i]);
  // }

  // candidateAnswer = input.question(`${question}`);
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  let grade = 0;
  for (let i = 0; i < questions.length; i++) {
    console.log(
      `Your answers were ${candidateAnswers[i]} and the correct answers were ${correctAnswers[i]}`
    );
    if (correctAnswers[i].toUpperCase() === candidateAnswers[i].toUpperCase()) {
      console.log("Your answer is correct!");
      grade = grade + 20;
    } else {
      console.log("Your answer is not correct!");
    }
  }
  console.log(`Your score is: ${grade}`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Nice to see you ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};
