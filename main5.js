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
        choice1: 'goodbye',
        choice2: 'man',
        choice3: 'violently, loudly',
        choice4: 'beats',
        answer: 2
    },
    {
        question: "verberat, verberavit",
        choice1: 'third',
        choice2: 'violently, loudly',
        choice3: 'beats',
        choice4: 'man',
        answer: 3
    },
    {
        question: "vale",
        choice1: 'man',
        choice2: 'useful',
        choice3: 'ground',
        choice4: 'goodbye',
        answer: 4
    },
    {
        question: "tertius",
        choice1: "third",
        choice2: 'useful',
        choice3: 'temple',
        choice4: 'ground',
        answer: 1
    },
    {
        question: "utilis",
        choice1: 'wife',
        choice2: 'useful',
        choice3: 'always',
        choice4: 'you (plural)',
        answer: 2
    },
    {
        question: "stultus",
        choice1: 'worried',
        choice2: 'second',
        choice3: 'stupid',
        choice4: 'seizes',
        answer: 3
    },
    {
        question: "sollicitus",
        choice1: 'useful',
        choice2: 'stupid',
        choice3: 'promises',
        choice4: 'worried',
        answer: 4
    },
    {
        question: "secundus",
        choice1: "second",
        choice2: 'trusts',
        choice3: 'senator',
        choice4: 'always',
        answer: 1
    },
    {
        question: "senator",
        choice1: 'beats',
        choice2: 'senator',
        choice3: 'second',
        choice4: 'gathers',
        answer: 2
    },
    {
        question: "rapit, rapuit",
        choice1: 'invites',
        choice2: 'reads',
        choice3: 'seizes',
        choice4: 'trusts',
        answer: 3
    },
    {
        question: "pugna",
        choice1: 'first',
        choice2: 'promises',
        choice3: 'it pleases',
        choice4: 'fight',
        answer: 4
    },
    {
        question: "primus",
        choice1: "first",
        choice2: 'peace',
        choice3: 'promises',
        choice4: 'almost',
        answer: 1
    },
    {
        question: "promittit, promisit",
        choice1: 'first',
        choice2: 'promises',
        choice3: 'peace',
        choice4: 'fight',
        answer: 2
    },
    {
        question: "convenit",
        choice1: 'trusts',
        choice2: 'satisfied',
        choice3: 'gathers',
        choice4: 'takes',
        answer: 3
    },
    {
        question: "credit, credidit (+ DAT)",
        choice1: 'gathers',
        choice2: 'guards',
        choice3: 'fills',
        choice4: 'trusts',
        answer: 4
    },
    {
        question: "placet, placuit (+ DAT)",
        choice1: "it pleases",
        choice2: 'saves, protects',
        choice3: 'promises',
        choice4: 'peace',
        answer: 1
    },
    {
        question: "noster",
        choice1: 'now',
        choice2: 'our',
        choice3: 'announces',
        choice4: 'no',
        answer: 2
    },
    {
        question: "de",
        choice1: 'thick',
        choice2: 'lies',
        choice3: 'about',
        choice4: 'falls',
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
        question: "nunc",
        choice1: "now",
        choice2: 'first',
        choice3: 'no',
        choice4: 'alone',
        answer: 1
    },
    {
        question: "favet, favit (+ DAT)",
        choice1: 'bravely',
        choice2: 'favors',
        choice3: 'runs away',
        choice4: 'runs away',
        answer: 2
    },
    {
        question: "murus",
        choice1: 'no',
        choice2: 'we',
        choice3: 'wall',
        choice4: 'marvelous, strange',
        answer: 3
    },
    {
        question: "gens, gentem",
        choice1: 'bravely',
        choice2: 'brother',
        choice3: 'in vain',
        choice4: 'family',
        answer: 4
    },
    {
        question: "minime",
        choice1: "no",
        choice2: 'invites',
        choice3: 'sends',
        choice4: 'announces',
        answer: 1
    },
    {
        question: "invitat, invitavit",
        choice1: 'generous',
        choice2: 'invites',
        choice3: 'finds',
        choice4: 'goes',
        answer: 2
    },
    {
        question: "legit",
        choice1: 'generous',
        choice2: 'falls',
        choice3: 'reads',
        choice4: 'at last',
        answer: 3
    },
    {
        question: "liberalis",
        choice1: 'reads',
        choice2: 'it pleases',
        choice3: 'trusts',
        choice4: 'generous',
        answer: 4
    },
    // STAGE 12
    {
        question: "amittit, amisit",
        choice1: "loses",
        choice2: 'accepts',
        choice3: 'goes away',
        choice4: 'favors',
        answer: 1
    },
    {
        question: "cinis",
        choice1: 'fills',
        choice2: 'ash',
        choice3: 'gathers',
        choice4: 'guards',
        answer: 2
    },
    {
        question: "complet, complevit",
        choice1: 'guards',
        choice2: 'ash',
        choice3: 'fills',
        choice4: 'takes',
        answer: 3
    },
    {
        question: "custodit, custodivit",
        choice1: 'fills',
        choice2: 'gathers',
        choice3: 'trusts',
        choice4: 'guards',
        answer: 4
    },
    {
        question: "densus",
        choice1: "thick",
        choice2: 'wall',
        choice3: 'no',
        choice4: 'empire',
        answer: 1
    },
    {
        question: "epistula",
        choice1: 'mountain',
        choice2: 'letter',
        choice3: 'empire',
        choice4: 'enemy',
        answer: 2
    },
    {
        question: "flamma",
        choice1: 'bravely',
        choice2: 'in vain',
        choice3: 'flame',
        choice4: 'runs away',
        answer: 3
    },
    {
        question: "fortiter",
        choice1: 'in vain',
        choice2: 'runs away',
        choice3: 'flame',
        choice4: 'bravely',
        answer: 4
    },
    {
        question: "frustra",
        choice1: "in vain",
        choice2: 'announces',
        choice3: 'runs away',
        choice4: 'brother',
        answer: 1
    },
    {
        question: "fugit",
        choice1: 'flame',
        choice2: 'runs away',
        choice3: 'in vain',
        choice4: 'bravely',
        answer: 2
    },
    {
        question: "fundus",
        choice1: 'wall',
        choice2: 'generous',
        choice3: 'farm',
        choice4: 'runs away',
        answer: 3
    },
    {
        question: "iacet, iacuit",
        choice1: 'falls',
        choice2: 'now, already',
        choice3: 'therefore',
        choice4: 'lies',
        answer: 4
    },
    {
        question: "iam",
        choice1: "now, already",
        choice2: 'falls',
        choice3: 'therefore',
        choice4: 'finds',
        answer: 1
    },
    {
        question: "igitur",
        choice1: 'now, already',
        choice2: 'therefore',
        choice3: 'reads',
        choice4: 'falls',
        answer: 2
    },
    {
        question: "incidit",
        choice1: 'enemy',
        choice2: 'book',
        choice3: 'falls',
        choice4: 'therefore',
        answer: 3
    },
    {
        question: "mirabilis",
        choice1: 'falls',
        choice2: 'sends',
        choice3: 'peace',
        choice4: 'marvelous, strange',
        answer: 4
    },
    {
        question: "mittit, misit",
        choice1: "sends",
        choice2: 'wall',
        choice3: 'mountain',
        choice4: 'violently, loudly',
        answer: 1
    },
    {
        question: "mons",
        choice1: 'sends',
        choice2: 'mountain',
        choice3: 'family',
        choice4: 'almost',
        answer: 2
    },
    {
        question: "nubes",
        choice1: 'very well',
        choice2: 'our',
        choice3: 'cloud',
        choice4: 'announces',
        answer: 3
    },
    {
        question: "optime",
        choice1: 'fears',
        choice2: 'almost',
        choice3: 'promises',
        choice4: 'very well',
        answer: 4
    },
    {
        question: "duo",
        choice1: "two",
        choice2: 'man',
        choice3: 'about',
        choice4: 'second',
        answer: 1
    },
    {
        question: "tres",
        choice1: 'goes',
        choice2: 'three',
        choice3: 'at last',
        choice4: 'fears',
        answer: 2
    },
    {
        question: "unus",
        choice1: 'ground',
        choice2: 'at last',
        choice3: 'one',
        choice4: 'wall',
        answer: 3
    },
    {
        question: "terra",
        choice1: 'very well',
        choice2: 'is quiet',
        choice3: 'satisfied',
        choice4: 'ground',
        answer: 4
    },
    {
        question: "timet, timuit",
        choice1: "fears",
        choice2: 'at last',
        choice3: 'is quiet',
        choice4: 'temple',
        answer: 1
    },
    {
        question: "templum",
        choice1: 'fears',
        choice2: 'temple',
        choice3: 'three',
        choice4: 'at last',
        answer: 2
    },
    {
        question: "tandem",
        choice1: 'fears',
        choice2: 'very well',
        choice3: 'at last',
        choice4: 'wall',
        answer: 3
    },
    {
        question: "sentit, sensit",
        choice1: 'opinion',
        choice2: 'saves, protects',
        choice3: 'always',
        choice4: 'feels',
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