const readline = require('readline');











const questions = [
    {
      question: "What is the capital of France?",
      options: ["1. Berlin", "2. Madrid", "3. Paris", "4. Rome"],
      answer: 3
    },
    {
      question: "What is 2 + 2?",
      options: ["1. 3", "2. 4", "3. 5", "4. 6"],
      answer: 2
    },
    {
      question: "What is the capital of Japan?",
      options: ["1. Seoul", "2. Tokyo", "3. Beijing", "4. Bangkok"],
      answer: 2
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["1. Atlantic Ocean", "2. Indian Ocean", "3. Arctic Ocean", "4. Pacific Ocean"],
      answer: 4
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["1. Ag", "2. Au", "3. Pb", "4. Fe"],
      answer: 2
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["1. Charles Dickens", "2. William Shakespeare", "3. Mark Twain", "4. J.K. Rowling"],
      answer: 2
    },
    {
      question: "What planet is known as the Red Planet?",
      options: ["1. Earth", "2. Mars", "3. Jupiter", "4. Venus"],
      answer: 2
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["1. Tomato", "2. Avocado", "3. Pepper", "4. Onion"],
      answer: 2
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["1. Vincent van Gogh", "2. Pablo Picasso", "3. Leonardo da Vinci", "4. Claude Monet"],
      answer: 3
    },
    {
      question: "What is the smallest prime number?",
      options: ["1. 0", "2. 1", "3. 2", "4. 3"],
      answer: 3
    },
    {
      question: "What is the boiling point of water?",
      options: ["1. 50°C", "2. 75°C", "3. 100°C", "4. 120°C"],
      answer: 3
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["1. Oxygen", "2. Carbon Dioxide", "3. Nitrogen", "4. Hydrogen"],
      answer: 2
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["1. African Elephant", "2. Blue Whale", "3. Giraffe", "4. Great White Shark"],
      answer: 2
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1. 1910", "2. 1912", "3. 1914", "4. 1916"],
      answer: 2
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["1. Gold", "2. Iron", "3. Diamond", "4. Quartz"],
      answer: 3
    }
  ];
  








let score = 0;
let currentQuestionIndex = 0;
const questionTimeLimit = 60; 
const totalQuizTimeLimit = 1800; 
let remainingQuizTime = totalQuizTimeLimit;
let questionTimer, quizTimer;









const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});






function askQuestion() {
 if (currentQuestionIndex >= questions.length) {
  endQuiz();
  return;
 }




 const currentQuestion = questions[currentQuestionIndex];
 console.log(`\n${currentQuestion.question}`);
 currentQuestion.options.forEach(option => console.log(option));



 let timeLeft = questionTimeLimit;

 questionTimer = setInterval(() => {
  timeLeft--;
  console.log(`Time left for this question: ${timeLeft}s`);
  if (timeLeft === 0) {
   clearInterval(questionTimer);
   console.log("\nTime's up! Moving to the next question...");
   currentQuestionIndex++;
   askQuestion(); 
  }
 }, 1000);
 rl.question("\nYour answer: ", (answer) => {
  clearInterval(questionTimer);
  if (parseInt(answer) === currentQuestion.answer) {
   console.log("Correct!");
   score++;
  } else {
   console.log("Wrong answer!");
  }
  currentQuestionIndex++;
  askQuestion(); 
 });
}






function startQuiz() {
 console.log("Quiz Started! You have limited time for each question.\n");
 quizTimer = setInterval(() => {
  remainingQuizTime--;
  console.log(`Remaining total quiz time: ${remainingQuizTime}s`);
  if (remainingQuizTime <= 0) {
   clearInterval(quizTimer);
   console.log("\nStop typing please , Time's up for the quiz!");
   endQuiz();
  }
 }, 1000);
 askQuestion();
}



function endQuiz() {
 clearInterval(quizTimer);
 rl.close();
 console.log(`\nQuiz over! Let's see if you pass : ${score}/${questions.length}`);
}
startQuiz();