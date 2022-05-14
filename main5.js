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
    //  stages 10-12 -->
    // STAGE 10
    {
        question: "abit, abiit",
        choice1: "goes away",
        choice2: 'loses',
        choice3: 'accepts',
        choice4: 'runs away',
        answer: 1
    },
    {
        question: "accipit, accepit",
        choice1: 'takes',
        choice2: 'accepts',
        choice3: 'satisfied',
        choice4: 'goes away',
        answer: 2
    },
    {
        question: "callidus",
        choice1: 'takes',
        choice2: 'satisfied',
        choice3: 'clever',
        choice4: 'gathers',
        answer: 3
    },
    {
        question: "capit, cepit",
        choice1: 'clever',
        choice2: 'trusts',
        choice3: 'it pleases',
        choice4: 'takes',
        answer: 4
    },
    {
        question: "contentus",
        choice1: "satisfied",
        choice2: 'guards',
        choice3: 'ash',
        choice4: 'fills',
        answer: 1
    },
    {
        question: "exclamat, exclamavit",
        choice1: 'announces',
        choice2: 'exclaims',
        choice3: 'is quiet',
        choice4: 'saves, protects',
        answer: 2
    },
    {
        question: "frater, fratrem",
        choice1: 'enemy',
        choice2: 'favors',
        choice3: 'brother',
        choice4: 'bravely',
        answer: 3
    },
    {
        question: "imperium",
        choice1: 'enemy',
        choice2: 'finds',
        choice3: 'therefore',
        choice4: 'empire',
        answer: 4
    },
    {
        question: "inimicus",
        choice1: "enemy",
        choice2: 'invites',
        choice3: 'empire',
        choice4: 'finds',
        answer: 1
    },
    {
        question: "invenit",
        choice1: 'therefore',
        choice2: 'finds',
        choice3: 'falls',
        choice4: 'enemy',
        answer: 2
    },
    {
        question: "it, iit",
        choice1: 'we',
        choice2: 'than, how',
        choice3: 'goes',
        choice4: 'finds',
        answer: 3
    },
    {
        question: "liber",
        choice1: 'goes',
        choice2: 'nos',
        choice3: 'therefore',
        choice4: 'book',
        answer: 4
    },
    {
        question: "nos",
        choice1: "we",
        choice2: 'you (plural)',
        choice3: 'alone',
        choice4: 'wife',
        answer: 1
    },
    {
        question: "nuntiat, nuntiavit",
        choice1: 'than, how',
        choice2: 'announces',
        choice3: 'violently, loudly',
        choice4: 'saves, protects',
        answer: 2
    },
    {
        question: "pax, pacem",
        choice1: 'harbor',
        choice2: 'promises',
        choice3: 'peace',
        choice4: 'first',
        answer: 3
    },
    {
        question: "portus",
        choice1: 'fight',
        choice2: 'peace',
        choice3: 'promises',
        choice4: 'harbor',
        answer: 4
    },
    {
        question: "quam",
        choice1: "than, how",
        choice2: 'no',
        choice3: 'now',
        choice4: 'our',
        answer: 1
    },
    {
        question: "semper",
        choice1: 'than, how',
        choice2: 'always',
        choice3: 'saves, protects',
        choice4: 'opinion',
        answer: 2
    },
    {
        question: "sententia",
        choice1: 'saves, protects',
        choice2: 'alone',
        choice3: 'opinion',
        choice4: 'feels',
        answer: 3
    },
    {
        question: "servat, servavit",
        choice1: 'always',
        choice2: 'alone',
        choice3: 'feels',
        choice4: 'saves, protects',
        answer: 4
    },
    {
        question: "solus",
        choice1: "alone",
        choice2: 'wife',
        choice3: 'you (plural)',
        choice4: 'is quiet',
        answer: 1
    },
    {
        question: "vos",
        choice1: 'is quiet',
        choice2: 'you (plural)',
        choice3: 'reads',
        choice4: 'no',
        answer: 2
    },
    {
        question: "uxor",
        choice1: 'violently, loudly',
        choice2: 'one',
        choice3: 'wife',
        choice4: 'fears',
        answer: 3
    },
    {
        question: "vehementer",
        choice1: 'is quiet',
        choice2: 'saves, protects',
        choice3: 'announces',
        choice4: 'violently, loudly',
        answer: 4
    },
    {
        question: "tacet, tacuit",
        choice1: "is quiet",
        choice2: 'very well',
        choice3: 'saves, protects',
        choice4: 'now, already',
        answer: 1
    },
    // STAGE 11
    {
        question: "vir",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
        choice1: "",
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
]

// let questions = [];

// constants

const points = 5;
const numberQuestions = 60;
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