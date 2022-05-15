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
        question: "bibit",
        choice1: 'cooks',
        choice2: 'out of, from',
        choice3: 'drinks',
        choice4: 'shouts',
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
        question: "clamat",
        choice1: 'shouts',
        choice2: 'wax tablet',
        choice3: 'looks around',
        choice4: 'cooks',
        answer: 1
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
        question: "exit",
        choice1: 'goes out',
        choice2: 'look',
        choice3: 'shouts',
        choice4: 'door',
        answer: 1
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
        question: "forum",
        choice1: 'forum',
        choice2: 'door',
        choice3: 'hello',
        choice4: 'angry',
        answer: 1
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
        question: "iratus",
        choice1: 'angry',
        choice2: 'rises',
        choice3: 'lion',
        choice4: 'replies',
        answer: 1
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
        question: "navis",
        choice1: 'ship',
        choice2: 'sees',
        choice3: 'smiles',
        choice4: 'sign, seal, signal',
        answer: 1
    },
    {
        question: "non",
        choice1: 'not',
        choice2: 'rises',
        choice3: 'ship',
        choice4: 'who',
        answer: 1
    },
    {
        question: "portat",
        choice1: 'cooks',
        choice2: 'carries',
        choice3: 'money',
        choice4: 'does business',
        answer: 2
    },
    {
        question: "respondet, respondit",
        choice1: 'gives back',
        choice2: 'replies',
        choice3: 'rises',
        choice4: 'smiles',
        answer: 2
    },
    {
        question: "smiles",
        choice1: 'signum',
        choice2: 'ridet, risit',
        choice3: 'quis',
        choice4: 'respondet, respondit',
        answer: 2
    },
    {
        question: "salve",
        choice1: 'enough',
        choice2: 'sells',
        choice3: 'hello',
        choice4: 'sign, seal, signal',
        answer: 3
    },
    {
        question: "surgit, surrexit",
        choice1: 'rises',
        choice2: 'angry',
        choice3: 'replies',
        choice4: 'smiles',
        answer: 1
    },
    {
        question: "taberna",
        choice1: 'sees',
        choice2: 'ship',
        choice3: 'forum',
        choice4: 'shop',
        answer: 4
    },
    {
        question: "videt, vidit",
        choice1: 'sign, seal, signal',
        choice2: 'calls',
        choice3: 'sells',
        choice4: 'sees',
        answer: 4
    },
    {
        question: "agit, egit",
        choice1: 'does business',
        choice2: 'alas, oh dear',
        choice3: 'does',
        choice4: 'out of, from',
        answer: 3
    },
    {
        question: "negotium agit",
        choice1: 'does',
        choice2: 'why',
        choice3: 'does business',
        choice4: 'looks around',
        answer: 3
    },
    {
        question: "anulus",
        choice1: 'ring',
        choice2: 'to',
        choice3: 'angry',
        choice4: 'rises',
        answer: 1
    },
    {
        question: "cera",
        choice1: 'why',
        choice2: 'cooks',
        choice3: 'look',
        choice4: 'wax tablet',
        answer: 4
    },
    {
        question: "coquit",
        choice1: 'why',
        choice2: 'cooks',
        choice3: 'wax tablet',
        choice4: 'shouts',
        answer: 2
    },
    {
        question: "cur",
        choice1: 'who',
        choice2: 'why',
        choice3: 'but',
        choice4: 'looks for',
        answer: 2
    },
    {
        question: "e, ex",
        choice1: 'why',
        choice2: 'out of, from',
        choice3: 'I',
        choice4: 'has',
        answer: 2
    },
    {
        question: "ego",
        choice1: 'but',
        choice2: 'I',
        choice3: 'who',
        choice4: 'you',
        answer: 2
    },
    {
        question: "eheu",
        choice1: 'out of, from',
        choice2: 'who',
        choice3: 'alas, oh dear',
        choice4: 'you',
        answer: 3
    },
    {
        question: "habet, habuit",
        choice1: 'replies',
        choice2: 'looks for',
        choice3: 'has',
        choice4: 'hello',
        answer: 3
    },
    {
        question: "inquit",
        choice1: 'has',
        choice2: 'says',
        choice3: 'looks for',
        choice4: 'who',
        answer: 2
    },
    {
        question: "iudex, iudicem",
        choice1: 'judge',
        choice2: 'says',
        choice3: 'looks for',
        choice4: 'gives back',
        answer: 1
    },
    {
        question: "mendax, mendacem",
        choice1: 'judge',
        choice2: 'says',
        choice3: 'liar',
        choice4: 'who',
        answer: 3
    },
    {
        question: "pecunia",
        choice1: 'money',
        choice2: 'poet',
        choice3: 'carries',
        choice4: 'terrified',
        answer: 1
    },
    {
        question: "perterritus",
        choice1: 'terrified',
        choice2: 'money',
        choice3: 'looks for',
        choice4: 'poet',
        answer: 1
    },
    {
        question: "poeta",
        choice1: 'poet',
        choice2: 'who',
        choice3: 'looks for',
        choice4: 'gives back',
        answer: 1
    },
    {
        question: "quaerit, quaesivit",
        choice1: 'who',
        choice2: 'sees',
        choice3: 'replies',
        choice4: 'looks for',
        answer: 4
    },
    {
        question: "quis",
        choice1: 'who',
        choice2: 'sed',
        choice3: 'replies',
        choice4: 'sign, seal',
        answer: 1
    },
    {
        question: "reddit",
        choice1: 'gives back',
        choice2: 'but',
        choice3: 'enough',
        choice4: 'replies',
        answer: 1
    },
    {
        question: "satis",
        choice1: 'enough',
        choice2: 'sign, seal, signal',
        choice3: 'but',
        choice4: 'hello',
        answer: 1
    },
    {
        question: "sed",
        choice1: 'but',
        choice2: 'has',
        choice3: 'I',
        choice4: 'says',
        answer: 1
    },
    {
        question: "signum",
        choice1: 'enough',
        choice2: 'you',
        choice3: 'sells',
        choice4: 'sign, seal, signal',
        answer: 4
    },
    {
        question: "tu",
        choice1: 'you',
        choice2: 'who',
        choice3: 'not',
        choice4: 'but',
        answer: 1
    },
    {
        question: "vendit",
        choice1: 'sells',
        choice2: 'surgit, surrexit',
        choice3: 'salve',
        choice4: 'sees',
        answer: 1
    },
    {
        question: "vocat",
        choice1: 'sells',
        choice2: 'calls',
        choice3: 'smiles',
        choice4: 'sees',
        answer: 2
    },
    {
        question: "leo",
        choice1: 'not',
        choice2: 'lion',
        choice3: 'says',
        choice4: 'liar',
        answer: 2
    }
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