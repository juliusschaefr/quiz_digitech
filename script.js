function welcomeMessage() { // Asks the user their Name and then prints out a welcome message
  let userName = prompt("What's your name?");
  if (userName == null || userName == "") userName = "anonymous user"; //user gets the name "anonymous user" if they don't enter anything
  userName = userName.trim(); // gets rid of unnecessary spaces at start and end
  alert(`Welcome to my quiz about general knowledge, ${userName}!

    
There are 5 questions. 
Let's go!`);
}

function playQuiz() { //this function is the actual quiz, including the questions and functions to check user answers and if they're right
  const questions = [ // the questions and solutions and if the answer should be a number or not
    {
      question: "What is the longest river in the world?",
      solution: "Nile",
      isNumber: false,
    },
    {
      question: "In which year did the Titanic sink?",
      solution: "1912",
      isNumber: true,
    },
    {
      question: "What is the fastest land animal?",
      solution: "Cheetah",
      isNumber: false,
    },
    {
      question: "What is the smallest prime number?",
      solution: "2",
      isNumber: true,
    },
    {
      question: "What is the chemical symbol for gold?",
      solution: "Au",
      isNumber: false,
    },
  ];

  function askQuestion(questionNo) {
    //calls getAnswer() and compares with the solution
    //returns true, false, or "skip"
    let { question, solution, isNumber } = questions[questionNo];
    let answer = getAnswer(question, isNumber);
    if (answer === null) return "skip"; //checks if the user clicked cancel to skip the question.
    let isCorrect = answer === solution.toLowerCase();
    return isCorrect;
  }

  function getAnswer(question, isNumber = false, hint = "") {
    //makes sure the input is valid
    //returns the trimmed answer in lowercase
    let answer = prompt(question + "\n" + hint);

    if (answer == "")
      answer = getAnswer(
        question,
        isNumber,
        "Pleaser enter an answer! Click cancel to skip this question",
      );
    else if (answer == null) return null;
    //returning null ends this loop,
    // therefore skipping the question when the user clicks cancel.
    else {
      answer = answer.trim();

      if (isNumber && isNaN(answer))
        answer = getAnswer(question, isNumber, "Please enter a number!");
      else if (!isNumber) answer = answer.toLowerCase();
    }
    return answer;
  }

  let score = 0;

  for (let qNo = 0; qNo < questions.length; qNo++) {
    //iterates through the questions and calls askQuestion()
    //also keeps track of scores
    let message = "";
    let answerCorrect = askQuestion(qNo);
    //feedback message
    if (answerCorrect === "skip") {
      // checks if the user skipped the question
      message = `You skipped the question. The right answer is ${questions[qNo].solution}`;
    } else if (answerCorrect) {
      message = "You got it right, congratulations!";
      score++;
    } else {
      message = `Sorry, that was wrong. The right answer is ${questions[qNo].solution}`;
    }
    message += `
Score: ${score} out of ${qNo + 1}`;
    alert(message);
  }
  
  //final feedback: tells user their score and grade
  let scorePercentage = Math.floor((score / questions.length) * 100);
  let scoreFeedback =
    scorePercentage >= 90
      ? "You are exceptional, your hard work has paid off, you attained an E!"
      : scorePercentage >= 75
        ? "Well done, you achieved M in this quiz."
        : scorePercentage >= 50
          ? "Good work, you gained an A grade."
          : "You FAILED. Study more.";

  let finalMessage = `Final score: ${scorePercentage}%
${scoreFeedback}

Do you want to play again?`;

  if (confirm(finalMessage)) playQuiz();
}

function ageVerification() { //verifies that the user is over 10 and under 20 years old
  //returns true or false
  let age = prompt("How old are you?")

  while (age == null || age == "" || isNaN(age)) {
    age = prompt("How old are you?\nPlease enter a number")
  }

  if (age > 10 && age < 20) return true;
  else return false;
}

//SEQUENCE
if (ageVerification()) { // starts welcome message and quiz if user passes age verifiacation
  welcomeMessage();
  playQuiz();
}
else {
  alert("Sorry, you can only take this quiz if you're between 10 and 20 years old.")
}