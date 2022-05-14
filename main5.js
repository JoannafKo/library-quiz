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