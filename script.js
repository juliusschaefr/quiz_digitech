function welcomeMessage() {
  let userName = prompt("What's your name?", "Anonymous user");
  alert(`Welcome to the quiz, ${userName}!
    
There are 5 questions. 
Let's go!`);
}

const questions = [
  {
    question: "What is the longest river in the world?",
    answer: "Nile",
  },
  {
    question: "In which year did the Titanic sink?",
    answer: "1912",
  },
  {
    question: "What is the fastest land animal?",
    answer: "Cheetah",
  },
  {
    question: "What is the smallest prime number?",
    answer: "2",
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
  },
];
