// test
console.log("Answer");

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "ad ",
        choice1: "big",
        choice2: 'shop',
        choice3: 'does',
        choice4: 'to',
        answer: 4
    },
    {
        question: "to",
        choice1: 'ad',
        choice2: 'cur',
        choice3: 'e, ex',
        choice4: 'ego',
        answer: 2
    },
    {
        question: "bibit",
        choice1: 'cooks',
        choice2: 'out of, from',
        choice3: 'drinks',
        choice4: 'shouts',
        answer: 3
    },
    {
        question: "drinks",
        choice1: 'ecce',
        choice2: 'coquit',
        choice3: 'bibit',
        choice4: 'circumspectat',
        answer: 3
    },
    {
        question: "circumspectat",
        choice1: 'look',
        choice2: 'looks around',
        choice3: 'replies',
        choice4: 'waits for',
        answer: 2
    },
    {
        question: "looks around",
        choice1: 'ecce',
        choice2: 'exspectat',
        choice3: 'circumspectat',
        choice4: 'respondet, respondit',
        answer: 3
    },
    {
        question: "clamat",
        choice1: 'shouts',
        choice2: 'wax tablet',
        choice3: 'looks around',
        choice4: 'cooks',
        answer: 1
    },
    {
        question: "shouts",
        choice1: 'circumspectat',
        choice2: 'clamat',
        choice3: 'coquit',
        choice4: 'exspectat',
        answer: 2
    },
    {
        question: "ecce",
        choice1: 'look',
        choice2: 'waits for',
        choice3: 'goes out',
        choice4: 'I',
        answer: 1
    },
    {
        question: "look",
        choice1: 'exit',
        choice2: 'exspectat',
        choice3: 'ecce',
        choice4: 'e, ex',
        answer: 3
    },
    {
        question: "exit",
        choice1: 'goes out',
        choice2: 'look',
        choice3: 'shouts',
        choice4: 'door',
        answer: 1
    },
    {
        question: "goes out",
        choice1: 'non',
        choice2: 'ecce',
        choice3: 'circumspectat',
        choice4: 'exit',
        answer: 4
    },
    {
        question: "exspectat",
        choice1: 'look',
        choice2: 'waits for',
        choice3: 'goes out',
        choice4: 'carries',
        answer: 2
    },
    {
        question: "waits for",
        choice1: 'portat',
        choice2: 'exit',
        choice3: 'exspectat',
        choice4: 'ecce',
        answer: 3
    },
    {
        question: "forum",
        choice1: 'forum',
        choice2: 'door',
        choice3: 'hello',
        choice4: 'angry',
        answer: 1
    },
    {
        question: "forum",
        choice1: 'magnus',
        choice2: 'salve',
        choice3: 'taberna',
        choice4: 'forum',
        answer: 4
    },
    {
        question: "ianua",
        choice1: 'door',
        choice2: 'carries',
        choice3: 'shop',
        choice4: 'replies',
        answer: 1
    },
    {
        question: "door",
        choice1: 'respondet, respondit',
        choice2: 'portat',
        choice3: 'taberna',
        choice4: 'ianua',
        answer: 4
    },
    {
        question: "iratus",
        choice1: 'angry',
        choice2: 'rises',
        choice3: 'lion',
        choice4: 'replies',
        answer: 1
    },
    {
        question: "angry",
        choice1: 'ridet, risit',
        choice2: 'magnus',
        choice3: 'iratus',
        choice4: 'inquit',
        answer: 3
    },
    {
        question: "magnus",
        choice1: 'smiles',
        choice2: 'money',
        choice3: 'big',
        choice4: 'does',
        answer: 3
    },
    {
        question: "big",
        choice1: 'mendax, mendacem',
        choice2: 'iudex, iudicem',
        choice3: 'quis',
        choice4: 'magnus',
        answer: 4
    },
    {
        question: "navis",
        choice1: 'ship',
        choice2: 'sees',
        choice3: 'smiles',
        choice4: 'sign, seal, signal',
        answer: 1
    },
    {
        question: "ship",
        choice1: 'navis',
        choice2: 'videt, vidit',
        choice3: 'salve',
        choice4: 'surgit, surrexit',
        answer: 1
    },
    {
        question: "non",
        choice1: 'not',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "not",
        choice1: 'non',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 1
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 2
    },
]

// let questions = [];

// constants

const points = 5;
const numberQuestions = 30;
// const numberQuestions = 403

// startGame();

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= numberQuestions) {
        //go to the end page
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${numberQuestions}`;
    // update progress bar
    progressBarFull.style.width = `${(questionCounter / numberQuestions) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};


choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        // console.log(classToApply);

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
                incrementScore(points);
              }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
          }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };

startGame();