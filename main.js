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
        question: "atrium",
        choice1: "bedroom",
        choice2: 'kitchen',
        choice3: 'mother',
        choice4: 'atrium',
        answer: 4
    },
    {
        question: "canis",
        choice1: 'street, road',
        choice2: 'dog',
        choice3: 'bedroom',
        choice4: 'cook',
        answer: 2
    },
    {
        question: "coquus",
        choice1: 'kitchen',
        choice2: 'cook',
        choice3: 'dog',
        choice4: 'mother',
        answer: 2
    },
    {
        question: "cubiculum",
        choice1: 'sleeps',
        choice2: 'slave',
        choice3: 'bedroom',
        choice4: 'greets',
        answer: 3
    },
    {
        question: "culina",
        choice1: 'street, road',
        choice2: 'enters',
        choice3: 'kitchen',
        choice4: 'merchant',
        answer: 3
    },
    {
        question: "est",
        choice1: 'in, on',
        choice2: 'is',
        choice3: 'praises',
        choice4: 'greets',
        answer: 2
    },
    {
        question: "filius",
        choice1: 'dining room',
        choice2: 'praises',
        choice3: 'enters',
        choice4: 'son',
        answer: 4
    },
    {
        question: "hortus",
        choice1: 'garden',
        choice2: 'father',
        choice3: 'praises',
        choice4: 'atrium',
        answer: 1
    },
    {
        question: "in",
        choice1: 'slave-girl',
        choice2: 'sleeps',
        choice3: 'also',
        choice4: 'in, on',
        answer: 4
    },
    {
        question: "laborat, laboravit",
        choice1: 'works',
        choice2: 'happy',
        choice3: 'greets',
        choice4: 'praises',
        answer: 1
    },
    {
        question: "mater",
        choice1: 'merchant',
        choice2: 'mother',
        choice3: 'master',
        choice4: 'table',
        answer: 2
    },
    {
        question: "pater",
        choice1: 'master',
        choice2: 'merchant',
        choice3: 'father',
        choice4: 'greets',
        answer: 3
    },
    {
        question: "sedet",
        choice1: 'slave',
        choice2: 'study',
        choice3: 'sits',
        choice4: 'greets',
        answer: 3
    },
    {
        question: "servus",
        choice1: 'sits',
        choice2: 'slave',
        choice3: 'slave-girl',
        choice4: 'son',
        answer: 2
    },
    {
        question: "tablinum",
        choice1: 'dining room',
        choice2: 'sleeps',
        choice3: 'praises',
        choice4: 'study',
        answer: 4
    },
    {
        question: "triclinium",
        choice1: 'street, road',
        choice2: 'study',
        choice3: 'dining room',
        choice4: 'sleeps',
        answer: 3
    },
    {
        question: "via",
        choice1: 'sleeps',
        choice2: 'also',
        choice3: 'in, on',
        choice4: 'street, road',
        answer: 4
    },
    {
        question: "amicus",
        choice1: 'slave-girl',
        choice2: 'atrium',
        choice3: 'study',
        choice4: 'friend',
        answer: 4
    },
    {
        question: "ancilla",
        choice1: 'friend',
        choice2: 'happy',
        choice3: 'slave-girl',
        choice4: 'atrium',
        answer: 3
    },
    {
        question: "cena",
        choice1: 'food',
        choice2: 'dinner',
        choice3: 'kitchen',
        choice4: 'cook',
        answer: 2
    },
    {
        question: "cibus",
        choice1: 'food',
        choice2: 'dog',
        choice3: 'dinner',
        choice4: 'cook',
        answer: 1
    },
    {
        question: "dominus",
        choice1: 'sleeps',
        choice2: 'mother',
        choice3: 'dining room',
        choice4: 'master',
        answer: 4
    },
    {
        question: "dormit",
        choice1: 'master',
        choice2: 'father',
        choice3: 'sleeps',
        choice4: 'street, road',
        answer: 3
    },
    {
        question: "gustat, gustavit",
        choice1: 'merchant',
        choice2: 'tastes',
        choice3: 'bedroom',
        choice4: 'garden',
        answer: 2
    },
    {
        question: "intrat, intravit",
        choice1: 'street, road',
        choice2: 'in, on',
        choice3: 'enters',
        choice4: 'is',
        answer: 3
    },
    {
        question: "laetus",
        choice1: 'happy',
        choice2: 'praises',
        choice3: 'works',
        choice4: 'son',
        answer: 1
    },
    {
        question: "laudat",
        choice1: 'happy',
        choice2: 'praises',
        choice3: 'enters',
        choice4: 'works',
        answer: 2
    },
    {
        question: "mensa",
        choice1: 'merchant',
        choice2: 'mother',
        choice3: 'table',
        choice4: 'study',
        answer: 3
    },
    {
        question: "mercator",
        choice1: 'table',
        choice2: 'master',
        choice3: 'merchant',
        choice4: 'mother',
        answer: 3
    },
    {
        question: "quoque",
        choice1: 'greets',
        choice2: 'also',
        choice3: 'street, road',
        choice4: 'in, on',
        answer: 2
    },
    {
        question: "salutat, salutavit",
        choice1: 'greets',
        choice2: 'also',
        choice3: 'sits',
        choice4: 'study',
        answer: 1
    }
]

// let questions = [];

// constants

const points = 5;
const numberQuestions = 20;
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