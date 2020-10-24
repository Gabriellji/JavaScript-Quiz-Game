const BUTTONS = document.querySelectorAll('.eightbit-btn');


const QUESTIONWRAP = document.querySelector('.question')

const quizQuestions = [
    {
        question: 'Is javascript and java the same thing?',
        isCorrectAnswer: false,
        score: 0
    },
    {
        question: 'Did Michael Jackson invent Java Script?',
        isCorrectAnswer: false,
        score: 0
    },
    {
        question: 'Can JS be used for front end and back end?',
        isCorrectAnswer: true,
        score: 0
    },
    {
        question: 'Can we reassign const variable?',
        isCorrectAnswer: false,
        score: 0
    },
    {
        question: 'document.write(NaN == NaN) ? ',
        isCorrectAnswer: false,
        score: 0
    },
    {
        question: 'Is undefined a data type?',
        isCorrectAnswer: true,
        score: 0
    },
    {
        question: '{} === {} ?',
        isCorrectAnswer: false,
        score: 0
    },
    {
        question: 'Is JavaScript case-sensitive?',
        isCorrectAnswer: true,
        score: 0
    },
    {
        question: 'The external JavaScript file must contain the <script> tag',
        isCorrectAnswer: true,
        score: 0
    },
    {
        question: 'document.write(String("Hello") == "Hello") ? ',
        isCorrectAnswer: true,
        score: 0
    },
    {
        question: 'document.write( 10 > 9 > 8 === true ) ? ',
        isCorrectAnswer: false,
        score: 0
    },
    {
        question: 'All keys in an object are strings.',
        isCorrectAnswer: true,
        score: 0
    },
    {
        question: 'document.write(( true + false ) > 2 + true ) ? ',
        isCorrectAnswer: false,
        score: 0
    },
    {
        question: 'document.write(Number("1") - 1 == 0) ?',
        isCorrectAnswer: true,
        score: 0
    },
];

let score = 0;
let currentQuestionIndex = 0;

const returnCurrentQuiz = (array) => {
    console.log(array[currentQuestionIndex])
    return array[currentQuestionIndex];
}

const currentQuestion = returnCurrentQuiz(quizQuestions).question;

const correctAnswer = returnCurrentQuiz(quizQuestions).isCorrectAnswer;

let TRUE_BUTTON = document.querySelector('.true');

let FALSE_BUTTON = document.querySelector('.false');


const isCorrectAnswer = (answer) => {
    // if (answer === correctAnswer) {
    //     score++;
    // }
    // currentQuestionIndex++;
    answer === correctAnswer;
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
        let flag;

        if(e.target.classList.contains('true')) {
            console.log('in true if');
            flag = true;
            isCorrectAnswer(flag);
            returnCurrentQuiz(quizQuestions).question
            currentQuestionIndex++;
            score += 10;
            console.log(score)
        } else {
            console.log('in false if');
            flag = false;
            isCorrectAnswer(flag);
            returnCurrentQuiz(quizQuestions).question
            currentQuestionIndex++;
        }
        QUESTIONWRAP.innerHTML = returnCurrentQuiz(quizQuestions).question;
        // finish++;
        // changeText();
        // console.log(finish)
        // if (finish === 14) {
        //     alert('hoho')
        // }
        //setQuiz(QUESTIONWRAP, quizQuestions, 'question')
    })
})

console.log(quizQuestions[0]['question'])
