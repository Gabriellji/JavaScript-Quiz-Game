const BUTTONS = document.querySelectorAll('.eightbit-btn');


const QUESTIONWRAP = document.querySelector('.question')

const quizQuestions = [
    {
        question: 'Is javascript and java the same thing?',
        isCorrect: false,
        score: 0
    },
    {
        question: 'Did Michael Jackson invent Java Script?',
        isCorrect: false,
        score: 0
    },
    {
        question: 'Can JS be used for front end and back end?',
        isCorrect: true,
        score: 0
    },
    {
        question: 'Can we reassign const variable?',
        isCorrect: false,
        score: 0
    },
    {
        question: 'document.write(NaN == NaN) ? ',
        isCorrect: false,
        score: 0
    },
    {
        question: 'Is undefined a data type?',
        isCorrect: true,
        score: 0
    },
    {
        question: '{} === {} ?',
        isCorrect: false,
        score: 0
    },
    {
        question: 'Is JavaScript case-sensitive?',
        isCorrect: true,
        score: 0
    },
    {
        question: 'The external JavaScript file must contain the <script> tag',
        isCorrect: true,
        score: 0
    },
    {
        question: 'document.write(String("Hello") == "Hello") ? ',
        isCorrect: true,
        score: 0
    },
    {
        question: 'document.write( 10 > 9 > 8 === true ) ? ',
        isCorrect: false,
        score: 0
    },
    {
        question: 'All keys in an object are strings.',
        isCorrect: true,
        score: 0
    },
    {
        question: 'document.write(( true + false ) > 2 + true ) ? ',
        isCorrect: false,
        score: 0
    },
    {
        question: 'document.write(Number("1") - 1 == 0) ?',
        isCorrect: true,
        score: 0
    },
];

QUESTIONWRAP.innerHTML = quizQuestions[0].question;

let score = 0;
let currentQuestionIndex = 0;

const returnCurrentQuiz = (array) => {
    return array[currentQuestionIndex];
}

const currentQuestion = returnCurrentQuiz(quizQuestions).question;

//const correctAnswer = returnCurrentQuiz(quizQuestions).isCorrect;

let TRUE_BUTTON = document.querySelector('.true');

let FALSE_BUTTON = document.querySelector('.false');


const isCorrectAnswer = (answer, correctAnswer) => {
    let res = answer === correctAnswer;
    return res;
}

// const guess = (array, answer) => {
//     if (returnCurrentQuiz(array).isCorrectAnswer(answer)) {
//       score++;
//     }
//     currentQuestionIndex++;
//   }
// QUESTIONWRAP.innerHTML = quizQuestions[0].question;
// index = 0;
// function changeText() {
//     index++;
//     index %= quizQuestions.length
//     QUESTIONWRAP.innerHTML = quizQuestions[index].question;
// }

//console.log(getRandomQuiz(quizQuestions).question)

BUTTONS.forEach((element) => {
    element.addEventListener('click', (e) => {
        
        console.log('click')
        let flag;
        if(e.target.classList.contains('true')) {
            console.log('true btn')
            flag = true;
            console.log(flag)
            let answer = returnCurrentQuiz(quizQuestions).isCorrect;
            //console.log(isCorrectAnswer(flag, answer))
            if (isCorrectAnswer(flag, answer)) {
                console.log('fegh')
                score+=10; 
                console.log(score)
            }
        } else {
            flag = false;
            let answer = returnCurrentQuiz(quizQuestions).isCorrect;
            //console.log(isCorrectAnswer(flag, answer))
            if (isCorrectAnswer(flag, answer)) {
                score+=10;
                console.log(score)
            }
        }
        currentQuestionIndex++;
        QUESTIONWRAP.innerHTML = returnCurrentQuiz(quizQuestions).question;
    })
})

//console.log(quizQuestions[0]['question'])
