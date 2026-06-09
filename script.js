function welcomeMessage() {
  let userName = prompt("What's your name?", "Anonymous user");
  alert(`Welcome to the quiz, ${userName}!

    
There are 5 questions. 
Let's go!`);
}

function playQuiz() {
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

  let score = 0;

  for (let qNo = 0; qNo < questions.length; qNo++) {
    let message = "";
    let answerCorrect = askQuestion(qNo);
    //feedback message
    if (answerCorrect) {
      message = "You got it right, congratulations!";
      score++;
    } else {
      message = `Sorry, that was wrong. The right answer is ${questions[qNo].solution}`;
    }
    message += `
Score: ${score} out of ${qNo + 1}`;
    alert(message);
  }
  //final feedback
  let scorePercentage = Math.floor((score / questions.length) * 100);
  let scoreFeedback =
    scorePercentage >= 90
      ? "You are exceptional, your hard work has paid off, you attained an E!"
      : scorePercentage >= 75
        ? "Well done, you achieved M in this quiz."
        : scorePercentage >= 50
          ? "Good work you gained an A grade."
          : "You FAILED. Study more.";

  let finalMessage = `Final score: ${scorePercentage}%
${scoreFeedback}

Do you want to play again?`;

  if (confirm(finalMessage)) playQuiz();
}

//SEQUENCE
welcomeMessage();
playQuiz();
