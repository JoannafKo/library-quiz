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
    //  stages 16-18 -->
    // STAGE 16 Latin Question English Answers
    {
        question: "audeō, audēre",
        choice1: "dare",
        choice2: 'part',
        choice3: 'for',
        choice4: 'there',
        answer: 1
    },
    {
        question: "dare",
        choice1: 'frangō, frangere, frēgī',
        choice2: 'audeō, audēre',
        choice3: 'manus, manus',
        choice4: 'animus, animi',
        answer: 2
    },
    {
        question: "caput, capitis",
        choice1: 'for',
        choice2: 'part',
        choice3: 'head',
        choice4: 'there',
        answer: 3
    },
    {
        question: "head",
        choice1: 'bene',
        choice2: 'agmen, agminis',
        choice3: 'frangō, frangere, frēgī',
        choice4: 'caput, capitis',
        answer: 4
    },
    {
        question: "coepī",
        choice1: "I began",
        choice2: 'for',
        choice3: 'part',
        choice4: 'there',
        answer: 1
    },
    {
        question: "I began",
        choice1: 'agmen, agminis',
        choice2: 'coepī',
        choice3: 'diū',
        choice4: 'deinde',
        answer: 2
    },
    {
        question: "cognoscō, cognoscere, cognovī",
        choice1: 'there',
        choice2: ' this way',
        choice3: 'get to know',
        choice4: 'on the next day',
        answer: 3
    },
    {
        question: "get to know",
        choice1: 'hūc',
        choice2: 'itaque',
        choice3: 'nox, noctis',
        choice4: 'cognoscō, cognoscere, cognovī',
        answer: 4
    },
    {
        question: "consistō, consistere, constitī",
        choice1: "stand firm",
        choice2: 'to place',
        choice3: 'on the next day',
        choice4: 'to this place',
        answer: 1
    },
    {
        question: "stand firm",
        choice1: 'paucī, paucae, pauca',
        choice2: 'consistō, consistere, constitī',
        choice3: 'maximus, maxima, maximum',
        choice4: 'itaque',
        answer: 2
    },
    {
        question: "dea, deae",
        choice1: 'multitudō, multitudinus',
        choice2: 'emperor',
        choice3: 'goddess',
        choice4: 'quondam',
        answer: 3
    },
    {
        question: "goddess",
        choice1: 'imperator, imperatorem',
        choice2: 'paucī, paucae, pauca',
        choice3: 'flos, florem',
        choice4: 'dea, deae',
        answer: 4
    },
    {
        question: "discedō, discedere, discessī",
        choice1: "leave",
        choice2: 'on the next day',
        choice3: 'one day',
        choice4: 'without',
        answer: 1
    },
    {
        question: "leave",
        choice1: 'sine',
        choice2: 'discedō, discedere, discessī',
        choice3: 'paucī, paucae, pauca',
        choice4: 'itaque',
        answer: 2
    },
    {
        question: "fortasse",
        choice1: 'crowd',
        choice2: 'very big',
        choice3: 'perhaps',
        choice4: 'attack',
        answer: 3
    },
    {
        question: "perhaps",
        choice1: 'itaque',
        choice2: 'paucī, paucae, pauca',
        choice3: 'multitudō, multitudinus',
        choice4: 'fortasse',
        answer: 4
    },
    {
        question: "frangō, frangere, frēgī",
        choice1: "break",
        choice2: 'seek, beg for',
        choice3: 'attack',
        choice4: 'never',
        answer: 1
    },
    {
        question: "break",
        choice1: 'impetus, impetūs',
        choice2: 'frangō, frangere, frēgī',
        choice3: 'petō, petere, petīvī',
        choice4: 'pars, partis',
        answer: 2
    },
    {
        question: "ibi",
        choice1: 'in front of',
        choice2: 'finally',
        choice3: 'there',
        choice4: 'part',
        answer: 3
    },
    {
        question: "there",
        choice1: 'prō',
        choice2: 'pars, partis',
        choice3: 'nemo',
        choice4: 'ibi',
        answer: 4
    },
    {
        question: "libenter",
        choice1: "gladly",
        choice2: 'very big',
        choice3: 'finally',
        choice4: 'one day',
        answer: 1
    },
    {
        question: "gladly",
        choice1: 'nemo',
        choice2: 'libenter',
        choice3: 'paucī, paucae, pauca',
        choice4: 'insula, insulae',
        answer: 2
    },
    {
        question: "manus",
        choice1: 'very big',
        choice2: 'night',
        choice3: 'hand',
        choice4: 'island',
        answer: 3
    },
    {
        question: "hand",
        choice1: 'nemo',
        choice2: 'hūc',
        choice3: 'itaque',
        choice4: 'manus',
        answer: 4
    },
    {
        question: "miles, militis",
        choice1: "soldier",
        choice2: 'to build',
        choice3: 'night',
        choice4: 'to die',
        answer: 1
    },
    {
        question: "soldier",
        choice1: 'paucī, paucae, pauca',
        choice2: 'miles, militis',
        choice3: 'aedificō, aedificāre, aedificavī',
        choice4: 'sine',
        answer: 2
    },
    {
        question: "nam",
        choice1: 'finally',
        choice2: 'night',
        choice3: 'for',
        choice4: 'to build',
        answer: 3
    },
    {
        question: "for",
        choice1: 'ita',
        choice2: 'paratus, parata, paratum',
        choice3: 'inter',
        choice4: 'nam',
        answer: 4
    },
    {
        question: "nemo",
        choice1: "no one",
        choice2: 'to place',
        choice3: 'to die',
        choice4: 'to punish',
        answer: 1
    },
    {
        question: "no one",
        choice1: 'soleō, solēre',
        choice2: 'nemo',
        choice3: 'ponō, ponere, posuī',
        choice4: 'simulac, simulatque',
        answer: 2
    },
    {
        question: "nox, noctis",
        choice1: 'in this way',
        choice2: 'to die',
        choice3: 'night',
        choice4: 'to raise',
        answer: 3
    },
    {
        question: "night",
        choice1: 'tollō, tollere, sustulī',
        choice2: 'pereō, perīre, periī',
        choice3: 'inter',
        choice4: 'nox, noctis',
        answer: 4
    },
    {
        question: "pars, partis",
        choice1: "part",
        choice2: 'to punish',
        choice3: 'this place',
        choice4: 'to place',
        answer: 1
    },
    {
        question: "part",
        choice1: 'hūc',
        choice2: 'pars, partis',
        choice3: 'numquam',
        choice4: 'paucī, paucae, pauca',
        answer: 2
    },
    {
        question: "posteā",
        choice1: 'without',
        choice2: 'this place',
        choice3: 'afterwards',
        choice4: 'for a long time',
        answer: 3
    },
    {
        question: "afterwards",
        choice1: 'itaque',
        choice2: 'insula, insulae',
        choice3: 'diū',
        choice4: 'posteā',
        answer: 4
    },
    {
        question: "postremō",
        choice1: "finally",
        choice2: 'one day',
        choice3: 'few',
        choice4: 'usually',
        answer: 1
    },
    {
        question: "finally",
        choice1: 'itaque',
        choice2: 'postremō',
        choice3: 'itaque',
        choice4: 'sine',
        answer: 2
    },
    {
        question: "petō, petere, petīvī",
        choice1: 'few',
        choice2: 'to this place',
        choice3: 'seek, beg for',
        choice4: 'part',
        answer: 3
    },
    {
        question: "seek, beg for",
        choice1: 'paucī, paucae, pauca',
        choice2: 'itaque',
        choice3: 'sine',
        choice4: 'petō, petere, petīvī',
        answer: 4
    },
    {
        question: "prō",
        choice1: "in front of",
        choice2: 'seek, beg for',
        choice3: 'finally',
        choice4: 'there',
        answer: 1
    },
    {
        question: "in front of",
        choice1: 'frangō, frangere, frēgī',
        choice2: 'prō',
        choice3: 'deinde',
        choice4: 'ponō, ponere, posuī',
        answer: 2
    },
    // STAGE 17
    {
        question: "ā, ab",
        choice1: 'in this way',
        choice2: 'help',
        choice3: 'from',
        choice4: 'then',
        answer: 3
    },
    {
        question: "from",
        choice1: 'deinde',
        choice2: 'ita',
        choice3: 'auxilium',
        choice4: 'ā, ab',
        answer: 4
    },
    {
        question: "agmen, agminis",
        choice1: "column of people",
        choice2: 'approach',
        choice3: 'to build',
        choice4: 'to this place',
        answer: 1
    },
    {
        question: "column of people",
        choice1: 'auxilium',
        choice2: 'agmen, agminis',
        choice3: 'paratus, parata, paratum',
        choice4: 'aedificō, aedificāre, aedificavī',
        answer: 2
    },
    {
        question: "animus, animi",
        choice1: 'approach',
        choice2: 'kind',
        choice3: 'spirit',
        choice4: 'seriously',
        answer: 3
    },
    {
        question: "spirit",
        choice1: 'itaque',
        choice2: 'bene',
        choice3: 'impetus, impetūs',
        choice4: 'animus, animi',
        answer: 4
    },
    {
        question: "appropinquō, appropinquāre, appropinquavī",
        choice1: "approach",
        choice2: 'without',
        choice3: 'attack',
        choice4: 'usually',
        answer: 1
    },
    {
        question: "approach",
        choice1: 'diū',
        choice2: 'appropinquō, appropinquāre, appropinquavī',
        choice3: 'hūc',
        choice4: 'itaque',
        answer: 2
    },
    {
        question: "bene",
        choice1: 'attack',
        choice2: 'spirit',
        choice3: 'good',
        choice4: 'few',
        answer: 3
    },
    {
        question: "good",
        choice1: 'animus, animi',
        choice2: 'impetus, impetūs',
        choice3: 'graviter',
        choice4: 'bene',
        answer: 4
    },
    {
        question: "benignus, benigna, benignum",
        choice1: "kind",
        choice2: 'crowd',
        choice3: 'never',
        choice4: 'very big',
        answer: 1
    },
    {
        question: "kind",
        choice1: 'paucī, paucae, pauca',
        choice2: 'benignus, benigna, benignum',
        choice3: 'bene',
        choice4: 'insula, insulae',
        answer: 2
    },
    {
        question: "diū",
        choice1: 'good',
        choice2: 'kind',
        choice3: 'for a long time',
        choice4: 'spirit',
        answer: 3
    },
    {
        question: "for a long time",
        choice1: 'benignus, benigna, benignum',
        choice2: 'ā, ab',
        choice3: 'appropinquō, appropinquāre, appropinquavī',
        choice4: 'diū',
        answer: 4
    },
    {
        question: "facilis",
        choice1: "easy",
        choice2: 'break',
        choice3: 'gladly',
        choice4: 'for',
        answer: 1
    },
    {
        question: "easy",
        choice1: 'dea, deae',
        choice2: 'facilis',
        choice3: 'miles, militis',
        choice4: 'coepī',
        answer: 2
    },
    {
        question: "graviter",
        choice1: 'emperor',
        choice2: 'help',
        choice3: 'seriously',
        choice4: 'to die',
        answer: 3
    },
    {
        question: "seriously",
        choice1: 'paratus, parata, paratum',
        choice2: 'ponō, ponere, posuī',
        choice3: 'postridie',
        choice4: 'graviter',
        answer: 4
    },
    {
        question: "hūc",
        choice1: "to this place",
        choice2: 'on the next day',
        choice3: 'as soon as',
        choice4: 'in this way',
        answer: 1
    },
    {
        question: "to this place",
        choice1: 'impetus, impetūs',
        choice2: 'hūc',
        choice3: 'ita',
        choice4: 'melior, melior, melius',
        answer: 2
    },
    {
        question: "impetus, impetūs",
        choice1: 'without',
        choice2: 'island',
        choice3: 'attack',
        choice4: 'to raise',
        answer: 3
    },
    {
        question: "attack",
        choice1: 'tollō, tollere, sustulī',
        choice2: 'ponō, ponere, posuī',
        choice3: 'puniō, punīre, punīvī',
        choice4: 'impetus, impetūs',
        answer: 4
    },
    {
        question: "insula, insulae",
        choice1: "island",
        choice2: 'afterwards',
        choice3: 'leave',
        choice4: 'leave',
        answer: 1
    },
    {
        question: "island",
        choice1: 'impetus, impetūs',
        choice2: 'insula, insulae',
        choice3: 'itaque',
        choice4: 'island',
        answer: 2
    },
    {
        question: "itaque",
        choice1: 'crowd',
        choice2: 'leave',
        choice3: 'and so',
        choice4: 'for',
        answer: 3
    },
    {
        question: "and so",
        choice1: 'quondam',
        choice2: 'sine',
        choice3: 'pars, partis',
        choice4: 'itaque',
        answer: 4
    },
    {
        question: "maximus, maxima, maximum",
        choice1: "very big",
        choice2: 'then',
        choice3: 'night',
        choice4: 'to die',
        answer: 1
    },
    {
        question: "very big",
        choice1: 'itaque',
        choice2: 'maximus, maxima, maximum',
        choice3: 'ita',
        choice4: 'melior, melior, melius',
        answer: 2
    },
    {
        question: "multitudō, multitudinus",
        choice1: 'to punish',
        choice2: 'night',
        choice3: 'crowd',
        choice4: 'as soon as',
        answer: 3
    },
    {
        question: "crowd",
        choice1: 'simulac, simulatque',
        choice2: 'paratus, parata, paratum',
        choice3: 'inter (+ACC)',
        choice4: 'multitudō, multitudinus',
        answer: 4
    },
    {
        question: "numquam",
        choice1: "never",
        choice2: 'then',
        choice3: 'among',
        choice4: 'as soon as',
        answer: 1
    },
    {
        question: "never",
        choice1: 'simulac, simulatque',
        choice2: 'numquam',
        choice3: 'ita',
        choice4: 'ponō, ponere, posuī',
        answer: 2
    },
    {
        question: "paucī, paucae, pauca",
        choice1: 'ready',
        choice2: 'to punish',
        choice3: 'few',
        choice4: 'to place',
        answer: 3
    },
    {
        question: "few",
        choice1: 'ponō, ponere, posuī',
        choice2: 'tollō, tollere, sustulī',
        choice3: 'simulac, simulatque',
        choice4: 'paucī, paucae, pauca',
        answer: 4
    },
    {
        question: "quondam",
        choice1: "one day",
        choice2: 'as soon as',
        choice3: 'to place',
        choice4: 'to raise',
        answer: 1
    },
    {
        question: "one day",
        choice1: 'simulac, simulatque',
        choice2: 'quondam',
        choice3: 'hūc',
        choice4: 'ponō, ponere, posuī',
        answer: 2
    },
    {
        question: "sine",
        choice1: 'seriously',
        choice2: 'as soon as',
        choice3: 'without',
        choice4: 'to place',
        answer: 3
    },
    {
        question: "without",
        choice1: 'appropinquō, appropinquāre, appropinquavī',
        choice2: 'impetus, impetūs',
        choice3: 'hūc',
        choice4: 'sine',
        answer: 4
    },
    {
        question: "soleō, solēre",
        choice1: "usually",
        choice2: 'easy',
        choice3: 'attack',
        choice4: 'approach',
        answer: 1
    },
    {
        question: "usually",
        choice1: 'diū',
        choice2: 'soleō, solēre',
        choice3: 'impetus, impetūs',
        choice4: 'agmen, agminis',
        answer: 2
    },
    {
        question: "aedificō, aedificāre, aedificavī",
        choice1: 'approach',
        choice2: 'for a long time',
        choice3: 'to build',
        choice4: 'easy',
        answer: 3
    },
    {
        question: "to build",
        choice1: 'ā, ab',
        choice2: 'appropinquō, appropinquāre, appropinquavī',
        choice3: 'diū',
        choice4: 'aedificō, aedificāre, aedificavī',
        answer: 4
    },
    {
        question: "auxilium",
        choice1: "help",
        choice2: 'never',
        choice3: 'for a long time',
        choice4: 'column of people',
        answer: 1
    },
    {
        question: "help",
        choice1: 'itaque',
        choice2: 'auxilium',
        choice3: 'ā, ab',
        choice4: 'numquam',
        answer: 2
    },
    {
        question: "consilium",
        choice1: 'never',
        choice2: 'approach',
        choice3: 'plan',
        choice4: 'good',
        answer: 3
    },
    {
        question: "plan",
        choice1: 'bene',
        choice2: 'itaque',
        choice3: 'impetus, impetūs',
        choice4: 'consilium',
        answer: 4
    },
    {
        question: "deinde",
        choice1: "then",
        choice2: 'attack',
        choice3: 'island',
        choice4: 'easy',
        answer: 1
    },
    {
        question: "then",
        choice1: 'bene',
        choice2: 'deinde',
        choice3: 'itaque',
        choice4: 'insula, insulae',
        answer: 2
    },
    {
        question: "flos, florem",
        choice1: 'easy',
        choice2: 'good',
        choice3: 'flower',
        choice4: 'impetus, impetūs',
        answer: 3
    },
    {
        question: "flower",
        choice1: 'animus, animi',
        choice2: 'diū',
        choice3: 'bene',
        choice4: 'flos, florem',
        answer: 4
    },
    {
        question: "imperator, imperatorem",
        choice1: "emperor",
        choice2: 'island',
        choice3: 'crowd',
        choice4: 'attack',
        answer: 1
    },
    {
        question: "emperor",
        choice1: 'deinde',
        choice2: 'imperator, imperatorem',
        choice3: 'animus, animi',
        choice4: 'diū',
        answer: 2
    },
    {
        question: "inter (+ACC)",
        choice1: 'easy',
        choice2: 'ready',
        choice3: 'among',
        choice4: 'good',
        answer: 3
    },
    {
        question: "among",
        choice1: 'postridie',
        choice2: 'deinde',
        choice3: 'ponō, ponere, posuī',
        choice4: 'inter (+ACC)',
        answer: 4
    },
    {
        question: "ita",
        choice1: "in this way",
        choice2: 'one day',
        choice3: 'to die',
        choice4: 'help',
        answer: 1
    },
    {
        question: "in this way",
        choice1: 'simulac, simulatque',
        choice2: 'ita',
        choice3: 'ponō, ponere, posuī',
        choice4: 'paratus, parata, paratum',
        answer: 2
    },
    {
        question: "melior, melior, melius",
        choice1: 'very big',
        choice2: 'one day',
        choice3: 'better',
        choice4: 'help',
        answer: 3
    },
    {
        question: "better",
        choice1: 'paucī, paucae, pauca',
        choice2: 'postridie',
        choice3: 'ponō, ponere, posuī',
        choice4: 'melior, melior, melius',
        answer: 4
    },
    {
        question: "paratus, parata, paratum",
        choice1: "ready",
        choice2: 'one day',
        choice3: 'usually',
        choice4: 'without',
        answer: 1
    },
    {
        question: "ready",
        choice1: 'numquam',
        choice2: 'paratus, parata, paratum',
        choice3: 'quondam',
        choice4: 'paucī, paucae, pauca',
        answer: 2
    },
    {
        question: "pereō, perīre, periī",
        choice1: 'very big',
        choice2: 'crowd',
        choice3: 'to die',
        choice4: 'few',
        answer: 3
    },
    {
        question: "to die",
        choice1: 'diū',
        choice2: 'impetus, impetūs',
        choice3: 'maximus, maxima, maximum',
        choice4: 'pereō, perīre, periī',
        answer: 4
    },
    {
        question: "ponō, ponere, posuī",
        choice1: "to place",
        choice2: 'usually',
        choice3: 'crowd',
        choice4: 'finally',
        answer: 1
    },
    {
        question: "to place",
        choice1: 'prō',
        choice2: 'ponō, ponere, posuī',
        choice3: 'postremō',
        choice4: 'petō, petere, petīvī',
        answer: 2
    },
    {
        question: "postridie",
        choice1: 'afterwards',
        choice2: 'finally',
        choice3: 'on the next day',
        choice4: 'in front of',
        answer: 3
    },
    {
        question: "on the next day",
        choice1: 'postremō',
        choice2: 'pars, partis',
        choice3: 'fortasse',
        choice4: 'postridie',
        answer: 4
    },
    {
        question: "puniō, punīre, punīvī",
        choice1: "to punish",
        choice2: 'finally',
        choice3: 'perhaps',
        choice4: 'part',
        answer: 1
    },
    {
        question: "to punish",
        choice1: 'nam',
        choice2: 'puniō, punīre, punīvī',
        choice3: 'pars, partis',
        choice4: 'prō',
        answer: 2
    },
    {
        question: "simulac, simulatque",
        choice1: 'stand firm',
        choice2: 'seek, beg for',
        choice3: 'as soon as',
        choice4: 'in front of',
        answer: 3
    },
    {
        question: "as soon as",
        choice1: 'manus, manus',
        choice2: 'pars, partis',
        choice3: 'fortasse',
        choice4: 'simulac, simulatque',
        answer: 4
    },
    {
        question: "tollō, tollere, sustulī",
        choice1: "to raise",
        choice2: 'finally',
        choice3: 'afterwards',
        choice4: 'nemo',
        answer: 1
    },
    {
        question: "to raise",
        choice1: 'manus, manus',
        choice2: 'tollō, tollere, sustulī',
        choice3: 'nam',
        choice4: 'pars, partis',
        answer: 2
    }
]

// let questions = [];

// constants

const points = 5;
const numberQuestions = 100;
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