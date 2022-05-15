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
    //  stages 13-15 -->
    // STAGE 13 Latin Question English Answers
    {
        question: "aedificium",
        choice1: "building",
        choice2: 'the other',
        choice3: 'among',
        choice4: 'something',
        answer: 1
    },
    {
        question: "alter, alterum",
        choice1: 'among',
        choice2: 'the other',
        choice3: 'another',
        choice4: 'something',
        answer: 2
    },
    {
        question: "cantō, cantāre, cantavī",
        choice1: 'the others',
        choice2: 'say',
        choice3: 'sing',
        choice4: 'among',
        answer: 3
    },
    {
        question: "ceterī",
        choice1: 'the other',
        choice2: 'sing',
        choice3: 'convenient',
        choice4: 'the others',
        answer: 4
    },
    {
        question: "dicō, dicere, dīxī",
        choice1: "say",
        choice2: 'destroy',
        choice3: 'god',
        choice4: 'sing',
        answer: 1
    },
    {
        question: "fessus",
        choice1: 'loyal',
        choice2: 'tired',
        choice3: 'wash',
        choice4: 'that',
        answer: 2
    },
    {
        question: "interficiō, interficere, interfēcī",
        choice1: 'yes',
        choice2: 'row',
        choice3: 'kill',
        choice4: 'even',
        answer: 3
    },
    {
        question: "ita verō",
        choice1: 'new',
        choice2: 'rush',
        choice3: 'life',
        choice4: 'yes',
        answer: 4
    },
    {
        question: "nolō, nolle, noluī",
        choice1: "refuse",
        choice2: 'none',
        choice3: 'surely not',
        choice4: 'new',
        answer: 1
    },
    {
        question: "novus",
        choice1: 'refuse',
        choice2: 'new',
        choice3: 'sailor',
        choice4: 'none',
        answer: 2
    },
    {
        question: "nullus",
        choice1: 'refuse',
        choice2: 'new',
        choice3: 'none',
        choice4: 'can be able',
        answer: 3
    },
    {
        question: "ordo, ordinem",
        choice1: 'life',
        choice2: 'rock',
        choice3: 'sea',
        choice4: 'row',
        answer: 4
    },
    {
        question: "possum, posse, potuī",
        choice1: "can be able",
        choice2: 'carefully',
        choice3: 'present',
        choice4: 'difficult',
        answer: 1
    },
    {
        question: "ruō, ruere, ruī",
        choice1: 'drag',
        choice2: 'rush',
        choice3: 'hold',
        choice4: 'himself, herself, themselves',
        answer: 2
    },
    {
        question: "sē",
        choice1: 'be',
        choice2: 'want',
        choice3: 'himself, herself, themselves',
        choice4: 'life',
        answer: 3
    },
    {
        question: "sum, esse, fuī",
        choice1: 'the others',
        choice2: 'the other',
        choice3: 'himself, herself, themselves',
        choice4: 'be',
        answer: 4
    },
    {
        question: "trahō, trahere, traxī",
        choice1: "drag",
        choice2: 'wave',
        choice3: 'want',
        choice4: 'hold',
        answer: 1
    },
    {
        question: "vita",
        choice1: 'want',
        choice2: 'life',
        choice3: 'win',
        choice4: 'wound',
        answer: 2
    },
    {
        question: "volō, velle, voluī",
        choice1: 'wound',
        choice2: 'life',
        choice3: 'want',
        choice4: 'win',
        answer: 3
    },
    {
        question: "vulnerō, vulnerāre, vulneraravī",
        choice1: 'win',
        choice2: 'life',
        choice3: 'want',
        choice4: 'wound',
        answer: 4
    },
    // STAGE 13 English Question Latin Answers
    {
        question: "building",
        choice1: "aedificium",
        choice2: 'apud',
        choice3: 'alter, alterum',
        choice4: 'aliquid',
        answer: 1
    },
    {
        question: "the other",
        choice1: 'ceterī',
        choice2: 'alter, alterum',
        choice3: 'nolō, nolle, noluī',
        choice4: 'interficiō, interficere, interfēcī',
        answer: 2
    },
    {
        question: "sing",
        choice1: 'debeō, debēre, debuī',
        choice2: 'ceterī',
        choice3: 'cantō, cantāre, cantavī',
        choice4: 'lentē',
        answer: 3
    },
    {
        question: "the others",
        choice1: 'aedificium',
        choice2: 'alter, alterum',
        choice3: '',
        choice4: 'ceterī',
        answer: 4
    },
    {
        question: "say",
        choice1: "dicō, dicere, dīxī",
        choice2: 'ruō, ruere, ruī',
        choice3: 'decorus',
        choice4: 'deleō, delēre, delēvī',
        answer: 1
    },
    {
        question: "tired",
        choice1: 'volō, velle, voluī',
        choice2: 'fessus',
        choice3: 'ipse',
        choice4: 'vulnerō, vulnerāre, vulneraravī',
        answer: 2
    },
    {
        question: "kill",
        choice1: 'ipse',
        choice2: 'vulnerō, vulnerāre, vulneraravī',
        choice3: 'interficiō, interficere, interfēcī',
        choice4: 'iste',
        answer: 3
    },
    {
        question: "yes",
        choice1: 'ipse',
        choice2: 'lavō, lavāre, lavāvī',
        choice3: 'iste',
        choice4: 'ita verō',
        answer: 4
    },
    {
        question: "refuse",
        choice1: "nolō, nolle, noluī",
        choice2: 'nullus',
        choice3: 'necesse',
        choice4: 'novus',
        answer: 1
    },
    {
        question: "row",
        choice1: 'trahō, trahere, traxī',
        choice2: 'ordo, ordinem',
        choice3: 'quī, quae, quod',
        choice4: 'volō, velle, voluī',
        answer: 2
    },
    {
        question: "can be able",
        choice1: 'quam',
        choice2: 'quamquam',
        choice3: 'possum, posse, potuī',
        choice4: 'num',
        answer: 3
    },
    {
        question: "rush",
        choice1: 'volō, velle, voluī',
        choice2: 'vita',
        choice3: 'vincō, vincere, vīcī',
        choice4: 'vulnerō, vulnerāre, vulneraravī',
        answer: 4
    },
    {
        question: "himself, herself, themselves",
        choice1: "sē",
        choice2: 'apud',
        choice3: 'sum, esse, fuī',
        choice4: 'que',
        answer: 1
    },
    {
        question: "be",
        choice1: 'vita',
        choice2: 'sum, esse, fuī',
        choice3: 'mare',
        choice4: 'sē',
        answer: 2
    },
    {
        question: "drag",
        choice1: 'possum, posse, potuī',
        choice2: 'ruō, ruere, ruī',
        choice3: 'trahō, trahere, traxī',
        choice4: 'vulnerō, vulnerāre, vulneraravī',
        answer: 3
    },
    {
        question: "life",
        choice1: 'vulnerō, vulnerāre, vulneraravī',
        choice2: 'volō, velle, voluī',
        choice3: 'vincō, vincere, vīcī',
        choice4: 'vita',
        answer: 4
    },
    {
        question: "want",
        choice1: "volō, velle, voluī",
        choice2: 'vincō, vincere, vīcī',
        choice3: 'vita',
        choice4: 'vulnerō, vulnerāre, vulneraravī',
        answer: 1
    },
    {
        question: "wound",
        choice1: 'vita',
        choice2: 'vulnerō, vulnerāre, vulneraravī',
        choice3: 'vincō, vincere, vīcī',
        choice4: 'volō, velle, voluī',
        answer: 2
    },
    // STAGE 14
    {
        question: "something",
        choice1: 'aedificium',
        choice2: 'alter, alterum',
        choice3: 'aliquid',
        choice4: 'apud',
        answer: 3
    },
    {
        question: "aliquid",
        choice1: 'everyday',
        choice2: 'among',
        choice3: 'the other',
        choice4: 'something',
        answer: 4
    },
    {
        question: "among",
        choice1: "apud",
        choice2: 'aliquid',
        choice3: 'alius, alia, aliud',
        choice4: 'aqua',
        answer: 1
    },
    {
        question: "apud",
        choice1: 'another',
        choice2: 'among',
        choice3: 'something',
        choice4: 'water',
        answer: 2
    },
    {
        question: "everyday",
        choice1: 'commodus, commoda, commodum',
        choice2: 'cantō, cantāre, cantavī',
        choice3: 'cotidie',
        choice4: 'ceterī',
        answer: 3
    },
    {
        question: "cotidie",
        choice1: 'water',
        choice2: 'right',
        choice3: 'convenient',
        choice4: 'everyday',
        answer: 4
    },
    {
        question: "decorus",
        choice1: "right",
        choice2: 'say',
        choice3: 'destroy',
        choice4: 'yes',
        answer: 1
    },
    {
        question: "right",
        choice1: 'dicō, dicere, dīxī',
        choice2: 'decorus',
        choice3: 'deus',
        choice4: 'novus',
        answer: 2
    },
    {
        question: "destroy",
        choice1: 'decorus',
        choice2: 'cotidie',
        choice3: 'deleō, delēre, delēvī',
        choice4: 'difficilis',
        answer: 3
    },
    {
        question: "deleō, delēre, delēvī",
        choice1: 'difficult',
        choice2: 'loyal',
        choice3: 'carefully',
        choice4: 'destroy',
        answer: 4
    },
    {
        question: "deus",
        choice1: "god",
        choice2: 'present',
        choice3: 'destroy',
        choice4: 'difficult',
        answer: 1
    },
    {
        question: "god",
        choice1: 'difficilis',
        choice2: 'deus',
        choice3: 'debeō, debēre, debuī',
        choice4: 'donum',
        answer: 2
    },
    {
        question: "difficilis",
        choice1: 'that',
        choice2: 'destroy',
        choice3: 'difficult',
        choice4: 'right',
        answer: 3
    },
    {
        question: "difficult",
        choice1: 'deus',
        choice2: 'diligenter',
        choice3: 'deleō, delēre, delēvī',
        choice4: 'difficilis',
        answer: 4
    },
    {
        question: "diligenter",
        choice1: "carefully",
        choice2: 'something',
        choice3: 'ought',
        choice4: 'present',
        answer: 1
    },
    {
        question: "carefully",
        choice1: 'diligenter',
        choice2: 'debeō, debēre, debuī',
        choice3: 'lentē',
        choice4: 'commodus, commoda, commodum',
        answer: 2
    },
    {
        question: "donum",
        choice1: 'even',
        choice2: 'slowly',
        choice3: 'present',
        choice4: 'ought',
        answer: 3
    },
    {
        question: "present",
        choice1: 'princeps, principem',
        choice2: 'debeō, debēre, debuī',
        choice3: 'praesum (+dat), praeesse, praefuī',
        choice4: 'donum',
        answer: 4
    },
    {
        question: "fidelis",
        choice1: "loyal",
        choice2: 'rock',
        choice3: 'even',
        choice4: 'broken',
        answer: 1
    },
    {
        question: "loyal",
        choice1: 'fractus, fracta, fractum',
        choice2: 'fidelis',
        choice3: 'princeps, principem',
        choice4: 'etiam',
        answer: 2
    },
    {
        question: "ipse",
        choice1: 'chieftain',
        choice2: 'win',
        choice3: 'himself, herself',
        choice4: 'who, which',
        answer: 3
    },
    {
        question: "himself, herself",
        choice1: 'iste',
        choice2: 'lavō, lavāre, lavāvī',
        choice3: 'ita verō',
        choice4: 'ipse',
        answer: 4
    },
    {
        question: "iste",
        choice1: "that",
        choice2: 'none',
        choice3: 'yes',
        choice4: 'rush',
        answer: 1
    },
    {
        question: "that",
        choice1: "iste",
        choice2: 'ipse',
        choice3: 'vita',
        choice4: 'interficiō, interficere, interfēcī',
        answer: 1
    },
    {
        question: "lavō, lavāre, lavāvī",
        choice1: 'wound',
        choice2: 'wash',
        choice3: 'life',
        choice4: 'how',
        answer: 2
    },
    {
        question: "wash",
        choice1: 'volō, velle, voluī',
        choice2: 'ruō, ruere, ruī',
        choice3: 'lavō, lavāre, lavāvī',
        choice4: 'quamquam',
        answer: 3
    },
    {
        question: "maritus",
        choice1: 'king',
        choice2: 'himself, herself, themselves',
        choice3: 'wash',
        choice4: 'husband',
        answer: 4
    },
    {
        question: "husband",
        choice1: "maritus",
        choice2: 'himself, herself, themselves',
        choice3: 'saxum',
        choice4: 'unda',
        answer: 1
    },
    {
        question: "necesse",
        choice1: 'priest',
        choice2: 'necessary',
        choice3: 'wave',
        choice4: 'sailor',
        answer: 2
    },
    {
        question: "necessary",
        choice1: 'quī, quae, quod',
        choice2: 'saxum',
        choice3: 'necesse',
        choice4: 'num',
        answer: 3
    },
    {
        question: "num",
        choice1: 'how',
        choice2: 'necessary',
        choice3: 'when',
        choice4: 'surely not',
        answer: 4
    },
    {
        question: "surely not",
        choice1: "num",
        choice2: 'iste',
        choice3: 'diligenter',
        choice4: 'necesse',
        answer: 1
    },
    {
        question: "quam",
        choice1: 'although',
        choice2: 'how',
        choice3: 'and',
        choice4: 'carefully',
        answer: 2
    },
    {
        question: "how",
        choice1: 'que',
        choice2: 'num',
        choice3: 'quam',
        choice4: 'ubi',
        answer: 3
    },
    {
        question: "quamquam",
        choice1: 'and',
        choice2: 'how',
        choice3: 'surely not',
        choice4: 'although',
        answer: 4
    },
    {
        question: "although",
        choice1: "quamquam",
        choice2: 'quam',
        choice3: 'vincō, vincere, vīcī',
        choice4: 'ubi',
        answer: 1
    },
    {
        question: "que",
        choice1: 'surely not',
        choice2: 'and',
        choice3: 'when',
        choice4: 'how',
        answer: 2
    },
    {
        question: "and",
        choice1: 'quī, quae, quod',
        choice2: 'princeps, principem',
        choice3: 'que',
        choice4: 'quamquam',
        answer: 3
    },
    {
        question: "rex",
        choice1: 'loyal',
        choice2: 'although',
        choice3: 'priest',
        choice4: 'king',
        answer: 4
    },
    {
        question: "king",
        choice1: "rex",
        choice2: 'vincō, vincere, vīcī',
        choice3: 'saxum',
        choice4: 'princeps, principem',
        answer: 1
    },
    {
        question: "ubi",
        choice1: 'even',
        choice2: 'when',
        choice3: 'hold',
        choice4: 'who, which',
        answer: 2
    },
    {
        question: "when",
        choice1: 'lentē',
        choice2: 'etiam',
        choice3: 'ubi',
        choice4: 'alius, alia, aliud',
        answer: 3
    },
    // STAGE 15
    {
        question: "alius, alia, aliud",
        choice1: 'everyday',
        choice2: 'something',
        choice3: 'among',
        choice4: 'another',
        answer: 4
    },
    {
        question: "another",
        choice1: "alius, alia, aliud",
        choice2: 'aedificium',
        choice3: 'aliquid',
        choice4: 'alter, alterum',
        answer: 1
    },
    {
        question: "aqua",
        choice1: 'something',
        choice2: 'water',
        choice3: 'loyal',
        choice4: 'among',
        answer: 2
    },
    {
        question: "water",
        choice1: 'fidelis',
        choice2: 'aliquid',
        choice3: 'aqua',
        choice4: 'apud',
        answer: 3
    },
    {
        question: "commodus, commoda, commodum",
        choice1: 'himself, herself',
        choice2: 'loyal',
        choice3: 'husband',
        choice4: 'convenient',
        answer: 4
    },
    {
        question: "convenient",
        choice1: "commodus, commoda, commodum",
        choice2: 'maritus',
        choice3: 'cotidie',
        choice4: 'que',
        answer: 1
    },
    {
        question: "ought",
        choice1: 'decorus',
        choice2: 'debeō, debēre, debuī',
        choice3: 'num',
        choice4: 'alius, alia, aliud',
        answer: 2
    },
    {
        question: "debeō, debēre, debuī",
        choice1: 'present',
        choice2: 'slowly',
        choice3: 'ought',
        choice4: 'be in charge of',
        answer: 3
    },
    {
        question: "horse",
        choice1: 'quam',
        choice2: 'mare',
        choice3: 'deus',
        choice4: 'equus',
        answer: 4
    },
    {
        question: "equus",
        choice1: "horse",
        choice2: 'alius, alia, aliud',
        choice3: 'present',
        choice4: 'sea',
        answer: 1
    },
    {
        question: "etiam",
        choice1: 'return',
        choice2: 'even',
        choice3: 'hold',
        choice4: 'rock',
        answer: 2
    },
    {
        question: "even",
        choice1: 'quī, quae, quod',
        choice2: 'mare',
        choice3: 'etiam',
        choice4: 'saxum',
        answer: 3
    },
    {
        question: "fractus, fracta, fractum",
        choice1: 'rock',
        choice2: 'even',
        choice3: 'win',
        choice4: 'broken',
        answer: 4
    },
    {
        question: "broken",
        choice1: "fractus, fracta, fractum",
        choice2: 'teneō, tenēre, tenuī',
        choice3: 'princeps, principem',
        choice4: 'vincō, vincere, vīcī',
        answer: 1
    },
    {
        question: "slowly",
        choice1: 'mare',
        choice2: 'lentē',
        choice3: 'quī, quae, quod',
        choice4: 'sacerdos, sacerdotem',
        answer: 2
    },
    {
        question: "lentē",
        choice1: 'loyal',
        choice2: 'and',
        choice3: 'slowly',
        choice4: 'when',
        answer: 3
    },
    {
        question: "mare",
        choice1: 'priest',
        choice2: 'win',
        choice3: 'rock',
        choice4: 'sea',
        answer: 4
    },
    {
        question: "sea",
        choice1: "mare",
        choice2: 'ita verō',
        choice3: 'unda',
        choice4: 'sē',
        answer: 1
    },
    {
        question: "miser, misera, miserum",
        choice1: 'refuse',
        choice2: 'miserable',
        choice3: 'himself, herself, themselves',
        choice4: 'rock',
        answer: 2
    },
    {
        question: "miserable",
        choice1: 'vincō, vincere, vīcī',
        choice2: 'quamquam',
        choice3: 'miser, misera, miserum',
        choice4: 'unda',
        answer: 3
    },
    {
        question: "sailor",
        choice1: 'unda',
        choice2: 'teneō, tenēre, tenuī',
        choice3: 'quī, quae, quod',
        choice4: 'nauta',
        answer: 4
    },
    {
        question: "nauta",
        choice1: "sailor",
        choice2: 'win',
        choice3: 'who, which',
        choice4: 'wave',
        answer: 1
    },
    {
        question: "be in charge of",
        choice1: 'redeō, redīre, rediī',
        choice2: 'praesum (+dat), praeesse, praefuī',
        choice3: 'vincō, vincere, vīcī',
        choice4: 'princeps, principem',
        answer: 2
    },
    {
        question: "praesum (+dat), praeesse, praefuī",
        choice1: 'who, which',
        choice2: 'chieftain',
        choice3: 'be in charge of',
        choice4: 'hold',
        answer: 3
    },
    {
        question: "chieftain",
        choice1: 'alius, alia, aliud',
        choice2: 'maritus',
        choice3: 'commodus, commoda, commodum',
        choice4: 'princeps, principem',
        answer: 4
    },
    {
        question: "princeps, principem",
        choice1: "chieftain",
        choice2: 'sailor',
        choice3: 'who, which',
        choice4: 'king',
        answer: 1
    },
    {
        question: "who, which",
        choice1: 'vita',
        choice2: 'quī, quae, quod',
        choice3: 'volō, velle, voluī',
        choice4: 'quamquam',
        answer: 2
    },
    {
        question: "quī, quae, quod",
        choice1: 'himself, herself',
        choice2: 'when',
        choice3: 'who, which',
        choice4: 'hold',
        answer: 3
    },
    {
        question: "return",
        choice1: 'unda',
        choice2: 'quī, quae, quod',
        choice3: 'ruō, ruere, ruī',
        choice4: 'redeō, redīre, rediī',
        answer: 4
    },
    {
        question: "redeō, redīre, rediī",
        choice1: "return",
        choice2: 'necessary',
        choice3: 'present',
        choice4: 'although',
        answer: 1
    },
    {
        question: "sacerdos, sacerdotem",
        choice1: 'husband',
        choice2: 'priest',
        choice3: 'king',
        choice4: 'god',
        answer: 2
    },
    {
        question: "priest",
        choice1: 'donum',
        choice2: 'maritus',
        choice3: 'sacerdos, sacerdotem',
        choice4: 'quamquam',
        answer: 3
    },
    {
        question: "saxum",
        choice1: 'wave',
        choice2: 'rush',
        choice3: 'drag',
        choice4: 'rock',
        answer: 4
    },
    {
        question: "rock",
        choice1: "saxum",
        choice2: 'sacerdos, sacerdotem',
        choice3: 'sē',
        choice4: 'ordo, ordinem',
        answer: 1
    },
    {
        question: "teneō, tenēre, tenuī",
        choice1: 'rush',
        choice2: 'hold',
        choice3: 'drag',
        choice4: 'want',
        answer: 2
    },
    {
        question: "hold",
        choice1: 'vulnerō, vulnerāre, vulneraravī',
        choice2: 'possum, posse, potuī',
        choice3: 'teneō, tenēre, tenuī',
        choice4: 'sum, esse, fuī',
        answer: 3
    },
    {
        question: "unda",
        choice1: 'rush',
        choice2: 'new',
        choice3: 'life',
        choice4: 'wave',
        answer: 4
    },
    {
        question: "wave",
        choice1: "unda",
        choice2: 'volō, velle, voluī',
        choice3: 'nullus',
        choice4: 'vita',
        answer: 1
    },
    {
        question: "vincō, vincere, vīcī",
        choice1: 'when',
        choice2: 'win',
        choice3: 'and',
        choice4: 'how',
        answer: 2
    },
    {
        question: "win",
        choice1: 'ubi',
        choice2: 'volō, velle, voluī',
        choice3: 'vincō, vincere, vīcī',
        choice4: 'quamquam',
        answer: 3
    },
]

// let questions = [];

// constants

const points = 5;
const numberQuestions = 80;
// const numberQuestions = 80;
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