function playQuiz() {
  function welcomeMessage() {
    let userName = prompt("What's your name?", "Anonymous user");
    alert(`Welcome to the quiz, ${userName}!
    
There are 5 questions. 
Let's go!`);
  }

  const questions = [
    {
      question: "What is the longest river in the world?",
      solution: "Nile",
    },
    {
      question: "In which year did the Titanic sink?",
      solution: "1912",
    },
    {
      question: "What is the fastest land animal?",
      solution: "Cheetah",
    },
    {
      question: "What is the smallest prime number?",
      solution: "2",
    },
    {
      question: "What is the chemical symbol for gold?",
      solution: "Au",
    },
  ];

  function askQuestion(questionNo) {
    let { question, solution } = questions[questionNo];
    let answer = getAnswer(question);
    let isCorrect = solution === answer;
    return isCorrect;
  }

  function getAnswer(question) {
    answer = prompt(question);
    return answer;
    // boundary values
    // loop for unexpected values
  }

  //let score = 0;

  welcomeMessage();

  for (let qNo = 0; qNo < questions.length; qNo++) {
    let message = "";
    let answerCorrect = askQuestion(qNo);
    if (answerCorrect) {
      message = "You got it right, congratulations!";
      //score++;
    } else {
      message = `Sorry, that was wrong. The right answer is ${questions[qNo].solution}`;
    }
    alert(message);
  }
}
