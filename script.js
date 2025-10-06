const questions = [
  {
    prompt: "Which array method adds an item to the end of an array?",
    choices: ["shift()", "push()", "unshift()", "pop()"],
    answer: 2,
  },
  {
    prompt: "Which loop always runs at least once?",
    choices: ["for", "while", "do...while", "for...of"],
    answer: 3,
  },
  {
    prompt: "What does % mean in JavaScript?",
    choices: ["Division", "Remainder", "Power", "Multiply"],
    answer: 2,
  },
  {
    prompt: "Which keyword declares a function?",
    choices: ["func", "def", "function", "lambda"],
    answer: 3,
  },
  {
    prompt: "Which method removes the last element from an array?",
    choices: ["pop()", "shift()", "slice()", "splice()"],
    answer: 1,
  },
  {
    prompt: "Which method adds the last element from an array?",
    choices: ["pop()", "shift()", "slice()", "splice()"],
    answer: 2,
  },
  {
    prompt: "Which array method removes an item from the end of an array?",
    choices: ["shift()", "push()", "unshift()", "pop()"],
    answer: 4,
  },
  {
    prompt: "What does /n mean in JavaScript?",
    choices: ["New Line", "Remainder", "Power", "Multiply"],
    answer: 1,
  },
   {
    prompt: "What does * mean in JavaScript?",
    choices: ["New Line", "Remainder", "Power", "Multiply"],
    answer: 4,
  },
  {
    prompt: "What does mathsquare mean in JavaScript?",
    choices: ["New Line", "Remainder", "Power", "Multiply"],
    answer: 3,
  },
  
];

let score = 0;

alert(" Welcome to Belchi's JavaScript Quiz!");

// main quiz loop
for (let i = 0; i < questions.length; i++) {
  const q = questions[i];
  let questionText = "Question " + (i + 1) + ":\n" + q.prompt + "\n\n";

  // show options
  for (let j = 0; j < q.choices.length; j++) {
    questionText += (j + 1) + ". " + q.choices[j] + "\n";
  }

  const userInput = prompt(questionText);
  const answer = Number(userInput);

  if (answer === q.answer) {
    alert(" Correct!");
    score = score + 1;
  } else {
    alert("Wrong! Correct answer is: " + q.choices[q.answer - 1]);
  }
}

// show final result
const percent = (score / questions.length) * 100;
alert(
  "----- QUIZ FINISHED -----\n" +
  "Total Questions: " + questions.length + "\n" +
  "Correct Answers: " + score + "\n" +
  "Score Percentage: " + percent.toFixed(2) + "%"
);
