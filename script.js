const BUTTONS = document.querySelectorAll('.mybutton');

const HIDDEN_WRAPS = document.querySelectorAll('.hide');
const QUESTIONWRAP = document.querySelector('.question');
const TYPING_TEXT_WRAP = document.querySelector('.final_score');
const FIREWALK_WRAP = document.querySelector('.pyro');

const TYPING_TEXT = document.querySelector('.type_text');

const SCORE_BOX = document.querySelector('.points');

const SCORE_DESC = document.querySelector('.score_desc');

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
        question: "What will return <br><pre><code>document.write(NaN == NaN) ?</code></pre>",
        isCorrect: false,
        score: 0
    },
    {
        question: 'Is undefined a data type?',
        isCorrect: true,
        score: 0
    },
    {
        question: 'Can we multyplay a string with a number?',
        isCorrect: false,
        score: 0
    },
    {
        question: 'Is JavaScript case-sensitive?',
        isCorrect: true,
        score: 0
    },
    {
        question: 'What will return <br><pre><code>document.write(String("Hello") == "Hello") ? </code></pre>',
        isCorrect: true,
        score: 0
    },
    {
        question: 'What will return <br><pre><code>document.write( 10 > 9 > 8 === true ) ? </code></pre>',
        isCorrect: false,
        score: 0
    },
    {
        question: 'Are they equal <br><pre><code>‘123’ === 123 ?</code></pre>',
        isCorrect: false,
        score: 0
    },
    {
        question: 'All keys in an object are strings.',
        isCorrect: true,
        score: 0
    },
    {
        question: 'What will return <br><pre><code>document.write(( true + false ) > 2 + true ) ? </code></pre>',
        isCorrect: false,
        score: 0
    },
    {
        question: 'What will return <br><pre><code>document.write(Number("1") - 1 == 0) ? </code></pre>',
        isCorrect: true,
        score: 0
    },
    {
        question: 'Can we name a variable with numbers <br><pre><code>let 123 ?</code></pre>',
        isCorrect: false,
        score: 0
    },
    {
        question: 'What will return <br><pre><code>!(!true) ?</code></pre>',
        isCorrect: true,
        score: 0
    },
    {
        question: 'Are they equal <br><pre><code>‘123’ == 123 ?</code></pre>',
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

//const currentQuestion = returnCurrentQuiz(quizQuestions).question;

// const TRUE_BUTTON = document.querySelector('.true');

// const FALSE_BUTTON = document.querySelector('.false');


const isCorrectAnswer = (answer, correctAnswer) => {
    let res = answer === correctAnswer;
    return res;
}

const drawPixelHeart = () => {
    const img = document.createElement('img');
    img.classList.add('score_desc_img');
    img.src = './assets/wite.png';
    SCORE_DESC.appendChild(img);
}

let start = 0;
let controlTimeOut;

const typeWriter = () => {
  const speedOFTyping = 90;
  const text = 'Your score is : ' + score + '!';
  TYPING_TEXT.innerHTML += text.charAt(start);
  start++;
  controlTimeOut = setTimeout(typeWriter, speedOFTyping);
  setTimeout(() => {
    clearTimeout(controlTimeOut);
    if (score < 50) {
        TYPING_TEXT.innerHTML = 'Practice more!';
    } else {
        TYPING_TEXT.innerHTML = 'Good job!!';
    }
  }, 3000)
}

BUTTONS.forEach((element) => {
    SCORE_BOX.innerHTML = 0;
    element.addEventListener('click', (e) => {
        if (currentQuestionIndex === quizQuestions.length - 1) {
            HIDDEN_WRAPS.forEach((element) => {
                element.classList.add('hidden');
            })
            FIREWALK_WRAP.classList.add('active');
            TYPING_TEXT_WRAP.classList.add('final_score_show');
            console.log(score)
            typeWriter();
            setTimeout(() => {
                FIREWALK_WRAP.classList.remove('active');
            }, 9000);
            return;
        }
        let flag;
        if(e.target.classList.contains('true')) {
            flag = true;
            let answer = returnCurrentQuiz(quizQuestions).isCorrect;
            if (isCorrectAnswer(flag, answer)) {
                score+=10; 
                drawPixelHeart();
                SCORE_BOX.innerHTML = score;
            }
        } else {
            flag = false;
            let answer = returnCurrentQuiz(quizQuestions).isCorrect;
            if (isCorrectAnswer(flag, answer)) {
                score+=10;
                drawPixelHeart();
                SCORE_BOX.innerHTML = score;
            }
        }
        currentQuestionIndex++;
        QUESTIONWRAP.innerHTML = returnCurrentQuiz(quizQuestions).question;
    })

})

//console.log(quizQuestions[0]['question'])
