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
    // STAGE 5
    {
        question: "adest",
        choice1: 'is here',
        choice2: 'are here',
        choice3: 'hears, listens to',
        choice4: 'farmer',
        answer: 1
    },
    {
        question: "adsunt",
        choice1: 'hears, listens to',
        choice2: 'is here',
        choice3: 'shout, uproar',
        choice4: 'are here',
        answer: 4
    },
    {
        question: "agricola",
        choice1: 'farmer',
        choice2: 'miser',
        choice3: 'is absent',
        choice4: 'was absent',
        answer: 1
    },
    {
        question: "ambulat",
        choice1: 'are here',
        choice2: 'walks',
        choice3: 'is absent',
        choice4: 'hears, listens to',
        answer: 2
    },
    {
        question: "audit, audivit",
        choice1: 'hurrah',
        choice2: 'acts in a play',
        choice3: 'shout, uproar',
        choice4: 'hears, listens to',
        answer: 4
    },
    {
        question: "clamor",
        choice1: 'hurrah',
        choice2: 'hears, listens to',
        choice3: 'fiercely',
        choice4: 'shout, uproar',
        answer: 4
    },
    {
        question: "contendit",
        choice1: 'hurries',
        choice2: 'shout, uproar',
        choice3: 'runs',
        choice4: 'hurrah',
        answer: 1
    },
    {
        question: "currit, cucurrit",
        choice1: 'hurries',
        choice2: 'good',
        choice3: 'runs',
        choice4: 'hurries',
        answer: 3
    },
    {
        question: "euge",
        choice1: 'today',
        choice2: 'was',
        choice3: 'once',
        choice4: 'hurrah',
        answer: 4
    },
    {
        question: "fabula",
        choice1: 'play, story',
        choice2: 'applauds',
        choice3: 'acts in a play',
        choice4: 'brave',
        answer: 1
    },
    {
        question: "fabulam agit",
        choice1: 'overpowers',
        choice2: 'acts in a play',
        choice3: 'then',
        choice4: 'applauds',
        answer: 2
    },
    {
        question: "femina",
        choice1: 'young man',
        choice2: 'girl',
        choice3: 'old man',
        choice4: 'woman',
        answer: 4
    },
    {
        question: "hodie",
        choice1: 'heads for, attacks, seeks',
        choice2: 'fiercely',
        choice3: 'today',
        choice4: 'hurries',
        answer: 3
    },
    {
        question: "iuvenis",
        choice1: 'woman',
        choice2: 'girl',
        choice3: 'girl',
        choice4: 'old man',
        answer: 4
    },
    {
        question: "meus",
        choice1: 'much',
        choice2: 'my, mine',
        choice3: 'small',
        choice4: 'many',
        answer: 2
    },
    {
        question: "multus",
        choice1: 'much',
        choice2: 'applauds',
        choice3: 'many',
        choice4: 'comes',
        answer: 1
    },
    {
        question: "multi",
        choice1: 'much',
        choice2: 'my, mine',
        choice3: 'many',
        choice4: 'stands',
        answer: 3
    },
    {
        question: "optimus",
        choice1: 'freedman',
        choice2: 'applauds',
        choice3: 'very good',
        choice4: 'overpowers',
        answer: 3
    },
    {
        question: "petit",
        choice1: 'applauds',
        choice2: 'many',
        choice3: 'girl',
        choice4: 'heads for, attacks, seeks',
        answer: 4
    },
    {
        question: "plaudit",
        choice1: 'applauds',
        choice2: 'very good',
        choice3: 'heads for, attacks, seeks',
        choice4: 'girl',
        answer: 1
    },
    {
        question: "puella",
        choice1: 'after',
        choice2: 'girl',
        choice3: 'hits',
        choice4: 'heads for, attacks, seeks',
        answer: 2
    },
    {
        question: "senex, senem",
        choice1: 'stands',
        choice2: 'young man',
        choice3: 'old man',
        choice4: 'writes',
        answer: 3
    },
    {
        question: "spectat",
        choice1: 'young man',
        choice2: 'stands',
        choice3: 'old man',
        choice4: 'looks at',
        answer: 4
    },
    {
        question: "stat",
        choice1: 'stands',
        choice2: 'writes',
        choice3: 'suddenly',
        choice4: 'looks at',
        answer: 1
    },
    {
        question: "turba",
        choice1: 'where',
        choice2: 'crowd',
        choice3: 'very good',
        choice4: 'comes',
        answer: 2
    },
    {
        question: "ubi",
        choice1: 'crowd',
        choice2: 'city',
        choice3: 'where',
        choice4: 'comes',
        answer: 3
    },
    {
        question: "urbs, urbem",
        choice1: 'comes',
        choice2: 'where',
        choice3: 'your',
        choice4: 'city',
        answer: 4
    },
    {
        question: "venit, venit",
        choice1: 'comes',
        choice2: 'city',
        choice3: 'where',
        choice4: 'curses',
        answer: 1
    },
    // STAGE 6
    {
        question: "abest",
        choice1: 'was absent',
        choice2: 'is absent',
        choice3: 'are here',
        choice4: 'is here',
        answer: 2
    },
    {
        question: "avarus",
        choice1: 'good',
        choice2: 'farmer',
        choice3: 'miser',
        choice4: 'walks',
        answer: 3
    },
    {
        question: "bonus",
        choice1: 'buys',
        choice2: 'miser',
        choice3: 'walks',
        choice4: 'good',
        answer: 4
    },
    {
        question: "emit",
        choice1: 'buys',
        choice2: 'miser',
        choice3: 'hurries',
        choice4: 'good',
        answer: 1
    },
    {
        question: "erat",
        choice1: 'hurries',
        choice2: 'was',
        choice3: 'through',
        choice4: 'hits',
        answer: 2
    },
    {
        question: "ferociter",
        choice1: 'was',
        choice2: 'intently',
        choice3: 'fiercely',
        choice4: 'young man',
        answer: 3
    },
    {
        question: "festinat",
        choice1: 'thief',
        choice2: 'woman',
        choice3: 'brave',
        choice4: 'hurries',
        answer: 4
    },
    {
        question: "fortis",
        choice1: 'brave',
        choice2: 'fiercely',
        choice3: 'thief',
        choice4: 'baby',
        answer: 1
    },
    {
        question: "fur",
        choice1: 'brave',
        choice2: 'thief',
        choice3: 'play, story',
        choice4: 'fiercely',
        answer: 2
    },
    {
        question: "infans, infantem",
        choice1: 'intently',
        choice2: 'freedman',
        choice3: 'baby',
        choice4: 'hits',
        answer: 3
    },
    {
        question: "intente",
        choice1: 'freedman',
        choice2: 'baby',
        choice3: 'young man',
        choice4: 'intently',
        answer: 4
    },
    {
        question: "aberat",
        choice1: 'was absent',
        choice2: 'is here',
        choice3: 'are here',
        choice4: 'is absent',
        answer: 1
    },
    {
        question: "libertus",
        choice1: 'intently',
        choice2: 'freedman',
        choice3: 'are here',
        choice4: 'was absent',
        answer: 2
    },
    {
        question: "olim",
        choice1: 'small',
        choice2: 'heads for, attacks, seeks',
        choice3: 'once',
        choice4: 'applauds',
        answer: 3
    },
    {
        question: "parvus",
        choice1: 'after',
        choice2: 'hits',
        choice3: 'through',
        choice4: 'small',
        answer: 4
    },
    {
        question: "",
        choice1: '',
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
        answer: 3
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 4
    },
    {
        question: "",
        choice1: '',
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
        answer: 3
    },
    {
        question: "",
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: 4
    },
    {
        question: "",
        choice1: '',
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
        answer: 3
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