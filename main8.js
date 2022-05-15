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
    },
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
        choice3: 'reddit',
        choice4: 'quaerit, quaesivit',
        answer: 1
    },
    {
        question: "reddit",
        choice1: 'gives back',
        choice2: 'but',
        choice3: 'enough',
        choice4: 'tu',
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
    },
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
        choice3: 'old man',
        choice4: 'young man',
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
        question: "per",
        choice1: 'through',
        choice2: 'heads for, attacks, seeks',
        choice3: 'applauds',
        choice4: 'small',
        answer: 1
    },
    {
        question: "postquam",
        choice1: 'through',
        choice2: 'after',
        choice3: 'hits',
        choice4: 'freedman',
        answer: 2
    },
    {
        question: "pulsat",
        choice1: 'because',
        choice2: 'after',
        choice3: 'hits',
        choice4: 'through',
        answer: 3
    },
    {
        question: "quod",
        choice1: 'looks at',
        choice2: 'old man',
        choice3: 'where',
        choice4: 'because',
        answer: 4
    },
    {
        question: "res",
        choice1: 'thing',
        choice2: 'your',
        choice3: 'then',
        choice4: 'suddenly',
        answer: 1
    },
    {
        question: "scribit",
        choice1: 'suddenly',
        choice2: 'writes',
        choice3: 'looks at',
        choice4: 'your',
        answer: 2
    },
    {
        question: "subito",
        choice1: 'writes',
        choice2: 'overpowers',
        choice3: 'suddenly',
        choice4: 'stands',
        answer: 3
    },
    {
        question: "superat",
        choice1: 'suddenly',
        choice2: 'writes',
        choice3: 'looks at',
        choice4: 'overpowers',
        answer: 4
    },
    {
        question: "tum",
        choice1: 'then',
        choice2: 'crowd',
        choice3: 'your',
        choice4: 'where',
        answer: 1
    },
    {
        question: "tuus",
        choice1: 'suddenly',
        choice2: 'your',
        choice3: 'then',
        choice4: 'after',
        answer: 2
    },
    {
        question: "vituperat",
        choice1: 'your',
        choice2: 'comes',
        choice3: 'curses',
        choice4: 'crowd',
        answer: 3
    },
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
    },
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
const numberQuestions = 200;
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