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

// stages Stages 7 8 9
// total terms: 

let questions = [
    // stage 7
    {
        question: "cenat, cenavit",
        choice1: "eats dinner",
        choice2: 'with',
        choice3: 'centurion',
        choice4: 'catches sight of',
        answer: 1
    },
    {
        question: "centurio",
        choice1: "eats",
        choice2: 'centurion',
        choice3: 'celebrates',
        choice4: 'quickly',
        answer: 2
    },
    {
        question: "conspicit, conspexit",
        choice1: "with",
        choice2: 'makes, does',
        choice3: 'catches sight of',
        choice4: 'understands',
        answer: 3
    },
    {
        question: "cum",
        choice1: "understands",
        choice2: 'eats dinner',
        choice3: 'makes, does',
        choice4: 'with',
        answer: 4
    },
    {
        question: "facit, fecit",
        choice1: "makes, does",
        choice2: 'yesterday',
        choice3: 'understands',
        choice4: 'easily',
        answer: 1
    },
    {
        question: "heri",
        choice1: "understands",
        choice2: 'yesterday',
        choice3: 'this',
        choice4: 'lives',
        answer: 2
    },
    {
        question: "ingens",
        choice1: "understands",
        choice2: 'cowardly, lazy',
        choice3: 'huge',
        choice4: 'encourages',
        answer: 3
    },
    {
        question: "intellegit, intellexit",
        choice1: "cowardly, lazy",
        choice2: 'cries',
        choice3: 'encourages',
        choice4: 'understands',
        answer: 4
    },
    {
        question: "lacrimat, lacrimavit",
        choice1: "cries",
        choice2: 'huge',
        choice3: 'again',
        choice4: 'understands',
        answer: 1
    },
    {
        question: "mortuus",
        choice1: "cries",
        choice2: 'dead',
        choice3: 'man, person',
        choice4: 'understands',
        answer: 2
    },
    {
        question: "narrat, narravit",
        choice1: "kills",
        choice2: 'dead',
        choice3: 'tells',
        choice4: 'nothing',
        answer: 3
    },
    {
        question: "necat, necavit",
        choice1: "nothing",
        choice2: 'all',
        choice3: 'remains',
        choice4: 'kills',
        answer: 4
    },
    {
        question: "nihil",
        choice1: "nothing",
        choice2: 'tells',
        choice3: 'beautiful, handsome',
        choice4: 'all',
        answer: 1
    },
    {
        question: "omnis",
        choice1: "that",
        choice2: 'all',
        choice3: 'offers',
        choice4: 'after',
        answer: 2
    },
    {
        question: "parat, paravit",
        choice1: "pest",
        choice2: 'nothing',
        choice3: 'prepares',
        choice4: 'near',
        answer: 3
    },
    {
        question: "pestis",
        choice1: "proceeds",
        choice2: 'near',
        choice3: 'prepares',
        choice4: 'pest',
        answer: 4
    },
    {
        question: "poculum",
        choice1: "cup",
        choice2: 'prepares',
        choice3: 'beautiful, handsome',
        choice4: 'proceeds',
        answer: 1
    },
    {
        question: "procedit, processit",
        choice1: "near",
        choice2: 'proceeds',
        choice3: 'foot',
        choice4: 'gate',
        answer: 2
    },
    {
        question: "prope",
        choice1: "proceeds",
        choice2: 'pest',
        choice3: 'near',
        choice4: 'cup',
        answer: 3
    },
    {
        question: "pulcher",
        choice1: "pest",
        choice2: 'near',
        choice3: 'proceeds',
        choice4: 'beautiful, handsome',
        answer: 4
    },
    {
        question: "rogat, rogavit",
        choice1: "asks",
        choice2: 'lies down',
        choice3: 'returns',
        choice4: 'quietly',
        answer: 1
    },
    {
        question: "tacite",
        choice1: "however",
        choice2: 'quietly',
        choice3: 'woods',
        choice4: 'frightens',
        answer: 2
    },
    {
        question: "tamen",
        choice1: "quietly",
        choice2: 'hands over',
        choice3: 'however',
        choice4: 'remains',
        answer: 3
    },
    {
        question: "terret, terruit",
        choice1: "prepares",
        choice2: 'hands over',
        choice3: 'returns',
        choice4: 'frightens',
        answer: 4
    },
    {
        question: "umbra",
        choice1: "ghost, shadow",
        choice2: 'blood',
        choice3: 'after',
        choice4: 'very much',
        answer: 1
    },
    {
        question: "valde",
        choice1: "fights",
        choice2: 'very much',
        choice3: 'often',
        choice4: 'famous',
        answer: 2
    },
    // STAGE 8
    {
        question: "agitat, agitavit",
        choice1: "yesterday",
        choice2: 'centurion',
        choice3: 'chases, hunts',
        choice4: 'tells',
        answer: 3
    },
    {
        question: "consumit, consumpsit",
        choice1: "catches sight of",
        choice2: 'eats dinner',
        choice3: 'centurion',
        choice4: 'eats',
        answer: 4
    },
    {
        question: "ducit, duxit",
        choice1: "leads",
        choice2: 'birthday',
        choice3: 'gives',
        choice4: 'day',
        answer: 1
    },
    {
        question: "eum",
        choice1: "easily",
        choice2: 'him',
        choice3: 'day',
        choice4: 'eats',
        answer: 2
    },
    {
        question: "facile",
        choice1: "fierce",
        choice2: 'cowardly, lazy',
        choice3: 'easily',
        choice4: 'foot',
        answer: 3
    },
    {
        question: "ferox, ferocem",
        choice1: "easily",
        choice2: 'leads',
        choice3: 'yesterday',
        choice4: 'fierce',
        answer: 4
    },
    {
        question: "gladius",
        choice1: "sword",
        choice2: 'birthday',
        choice3: 'brings, carries',
        choice4: 'throws, sends out',
        answer: 1
    },
    {
        question: "habitat, habitavit",
        choice1: "this",
        choice2: 'lives',
        choice3: 'makes, does',
        choice4: 'cowardly, lazy',
        answer: 2
    },
    {
        question: "hic",
        choice1: "lives",
        choice2: 'gate',
        choice3: 'this',
        choice4: 'foot',
        answer: 3
    },
    {
        question: "ignavus",
        choice1: "encourages",
        choice2: 'messenger',
        choice3: 'demands',
        choice4: 'cowardly, lazy',
        answer: 4
    },
    {
        question: "incitat, incitavit",
        choice1: "encourages",
        choice2: 'lives',
        choice3: 'inspects',
        choice4: 'cowardly, lazy',
        answer: 1
    },
    {
        question: "nuntius",
        choice1: "hands over",
        choice2: 'messenger',
        choice3: 'guest',
        choice4: 'remains',
        answer: 2
    },
    {
        question: "pes, pedem",
        choice1: "demands",
        choice2: 'boy',
        choice3: 'foot',
        choice4: 'often',
        answer: 3
    },
    {
        question: "porta",
        choice1: "demands",
        choice2: 'fights',
        choice3: 'lies down',
        choice4: 'gate',
        answer: 4
    },
    {
        question: "postulat, postulavit",
        choice1: "demands",
        choice2: 'lies down',
        choice3: 'often',
        choice4: 'gate',
        answer: 1
    },
    {
        question: "puer",
        choice1: "demands",
        choice2: 'boy',
        choice3: 'lives',
        choice4: 'cowardly, lazy',
        answer: 2
    },
    {
        question: "pugnat, pugnavit",
        choice1: "after",
        choice2: 'boy',
        choice3: 'fights',
        choice4: 'for a short time',
        answer: 3
    },
    {
        question: "recumbit, recubuit",
        choice1: "woods",
        choice2: 'often',
        choice3: 'returns',
        choice4: 'lies down',
        answer: 4
    },
    {
        question: "saepe",
        choice1: "often",
        choice2: 'frightens',
        choice3: 'his',
        choice4: 'blood',
        answer: 1
    },
    {
        question: "sanguis",
        choice1: "woods",
        choice2: 'blood',
        choice3: 'his',
        choice4: 'often',
        answer: 2
    },
    {
        question: "silva",
        choice1: "blood",
        choice2: 'asks',
        choice3: 'woods',
        choice4: 'his',
        answer: 3
    },
    // STAGE 9
    {
        question: "agnoscit, agnovit",
        choice1: "celebrates",
        choice2: 'chases, hunts',
        choice3: 'with',
        choice4: 'recognizes',
        answer: 4
    },
    {
        question: "celebrat, celebravit",
        choice1: "celebrates",
        choice2: 'leads',
        choice3: 'eats',
        choice4: 'eats dinner',
        answer: 1
    },
    {
        question: "celeriter",
        choice1: "celebrates",
        choice2: 'quickly',
        choice3: 'citizen',
        choice4: 'wants',
        answer: 2
    },
    {
        question: "civis",
        choice1: "quickly",
        choice2: 'eats',
        choice3: 'citizen',
        choice4: 'with',
        answer: 3
    },
    {
        question: "cupit, cupivit",
        choice1: "citizen",
        choice2: 'eats',
        choice3: 'catches sight of',
        choice4: 'wants',
        answer: 4
    },
    {
        question: "dat, dedit",
        choice1: "gives",
        choice2: 'with',
        choice3: 'yesterday',
        choice4: 'day',
        answer: 1
    },
    {
        question: "dies",
        choice1: "gives",
        choice2: 'day',
        choice3: 'birthday',
        choice4: 'yesterday',
        answer: 2
    },
    {
        question: "dies natalis",
        choice1: "day",
        choice2: 'chases, hunts',
        choice3: 'birthday',
        choice4: 'catches sight of',
        answer: 3
    },
    {
        question: "mittit, misit",
        choice1: "encourages",
        choice2: 'dead',
        choice3: 'tells',
        choice4: 'send',
        answer: 4
    },
    {
        question: "emittit, emisit",
        choice1: "throws, sends out",
        choice2: 'him',
        choice3: 'exercises',
        choice4: 'with',
        answer: 1
    },
    {
        question: "exercet, exercuit",
        choice1: "brings, carries",
        choice2: 'exercises',
        choice3: 'him',
        choice4: 'throws, sends out',
        answer: 2
    },
    {
        question: "fert, tulit",
        choice1: "inspects",
        choice2: 'cowardly, lazy',
        choice3: 'brings, carries',
        choice4: 'lies down',
        answer: 3
    },
    {
        question: "homo, hominem",
        choice1: "guest",
        choice2: 'day',
        choice3: 'that',
        choice4: 'man, person',
        answer: 4
    },
    {
        question: "hospes",
        choice1: "guest",
        choice2: 'that',
        choice3: 'man, person',
        choice4: 'returns',
        answer: 1
    },
    {
        question: "ille",
        choice1: "his",
        choice2: 'that',
        choice3: 'offers',
        choice4: 'after',
        answer: 2
    },
    {
        question: "inspicit, inspexit",
        choice1: "again",
        choice2: 'that',
        choice3: 'inspects',
        choice4: 'encourages',
        answer: 3
    },
    {
        question: "iterum",
        choice1: "inspects",
        choice2: 'encourages',
        choice3: 'cowardly, lazy',
        choice4: 'again',
        answer: 4
    },
    {
        question: "manet, mansit",
        choice1: "remains",
        choice2: 'messenger',
        choice3: 'lives',
        choice4: 'dead',
        answer: 1
    },
    {
        question: "tradit, tradidit",
        choice1: "returns",
        choice2: 'hands over',
        choice3: 'quietly',
        choice4: 'frightens',
        answer: 2
    },
    {
        question: "revenit",
        choice1: "very much",
        choice2: 'beautiful, handsome',
        choice3: 'returns',
        choice4: 'frightens',
        answer: 3
    },
    {
        question: "suus",
        choice1: "with",
        choice2: 'near',
        choice3: 'asks',
        choice4: 'his',
        answer: 4
    },
    {
        question: "post",
        choice1: "after",
        choice2: 'boy',
        choice3: 'famous',
        choice4: 'gate',
        answer: 1
    },
    {
        question: "paulisper",
        choice1: "after",
        choice2: 'for a short time',
        choice3: 'beautiful, handsome',
        choice4: 'famous',
        answer: 2
    },
    {
        question: "notus",
        choice1: "for a short time",
        choice2: 'soon',
        choice3: 'famous',
        choice4: 'middle',
        answer: 3
    },
    {
        question: "offert, obtulit",
        choice1: "gate",
        choice2: 'all',
        choice3: 'prepares',
        choice4: 'offers',
        answer: 4
    },
    {
        question: "mox",
        choice1: "soon",
        choice2: 'encourages',
        choice3: 'middle',
        choice4: 'messenger',
        answer: 1
    },
    {
        question: "medius",
        choice1: "soon",
        choice2: 'middle',
        choice3: 'lies down',
        choice4: 'dead',
        answer: 2
    }
]

// let questions = [];

// constants

const points = 5;
const numberQuestions = 50;
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