// an array of all <button> with a class 'mybutton'
const BUTTONS = document.querySelectorAll('.mybutton'); // [ button, button, ....]

// an array of <div> that i want to show/hide at the end of the game
const HIDDEN_WRAPS = document.querySelectorAll('.hide'); // [div, div, ...]

// <p> that contains question
const QUESTIONWRAP = document.querySelector('.question');

// <div> that contains <p> with the text of final score at the end of the game
const TYPING_TEXT_WRAP = document.querySelector('.final_score');

// <div> that contains firework elements
const FIREWALK_WRAP = document.querySelector('.pyro');

// <p> that will contains typing text when I call function typeWriter() see line 145
const TYPING_TEXT = document.querySelector('.type_text');

// <span> that contains score points
const SCORE_BOX = document.querySelector('.points');

// <div> that will contains pixel hearts when I call function drawPixelHeart() see line 128
const SCORE_DESC = document.querySelector('.score_desc');

const SPECH_BUBLE = document.querySelector('.message_wrap');
const MESSAGE = document.querySelector('.message_text');

const LAST_SCORE = document.querySelector('.last');

// if(!window.localStorage.hash) {
//     LAST_SCORE.innerHTML = 'YOU HAVE NOT PLAYED YET...';
// }

var userStringFromLocalStorage = localStorage.getItem('userScore');

LAST_SCORE.innerHTML = userStringFromLocalStorage;


// an array of objects with quiz data 
const quizQuestions = [
    {
        question: 'Is javascript and java the same thing?',
        isCorrect: false,
    },
    {
        question: 'Did Michael Jackson invent Java Script?',
        isCorrect: false,
    },
    {
        question: 'Can JS be used for front end and back end?',
        isCorrect: true,
    },
    {
        question: 'Can we reassign const variable?',
        isCorrect: false,
    },
    {
        question: "What will return <br><pre><code>document.write(NaN == NaN) ?</code></pre>",
        isCorrect: false,
    },
    {
        question: 'Is undefined a data type?',
        isCorrect: true,
    },
    {
        question: 'Can we multyplay a string with a number?',
        isCorrect: false,
    },
    {
        question: 'Is JavaScript case-sensitive?',
        isCorrect: true,
    },
    {
        question: 'What will return <br><pre><code>document.write(String("Hello") == "Hello") ? </code></pre>',
        isCorrect: true,
    },
    {
        question: 'What will return <br><pre><code>document.write( 10 > 9 > 8 === true ) ? </code></pre>',
        isCorrect: false,
    },
    {
        question: 'Are they equal <br><pre><code>‘123’ === 123 ?</code></pre>',
        isCorrect: false,
    },
    {
        question: 'All keys in an object are strings.',
        isCorrect: true,
    },
    {
        question: 'What will return <br><pre><code>document.write(( true + false ) > 2 + true ) ? </code></pre>',
        isCorrect: false,
    },
    {
        question: 'What will return <br><pre><code>document.write(Number("1") - 1 == 0) ? </code></pre>',
        isCorrect: true,
    },
    {
        question: 'Can we name a variable with numbers <br><pre><code>let 123 ?</code></pre>',
        isCorrect: false,
    },
    {
        question: 'What will return <br><pre><code>!(!true) ?</code></pre>',
        isCorrect: true,
    },
    {
        question: 'Are they equal <br><pre><code>‘123’ == 123 ?</code></pre>',
        isCorrect: true,
    },
];

// it place start index of questions from array with data above
QUESTIONWRAP.innerHTML = quizQuestions[0].question;

//it place score index 0
SCORE_BOX.innerHTML = 0;

// // a variable that will keep curent score
let score = 0;
// a variable that will keep curent index of question
let currentQuestionIndex = 0;

// a function that return current question from the array. I call it on 196, 204, 212 line
const returnCurrentQuiz = (array) => {
    return array[currentQuestionIndex];
}

// a function that compare user answer and real answer of the question. I call it on 198, 206 line
const isCorrectAnswer = (answer, correctAnswer) => {
    let res = answer === correctAnswer;
    return res;
}

// a function that draw pixel hearts if the answer is correct. I call it on 201, 209 line
const drawPixelHeart = () => {
    const img = document.createElement('img');
    img.classList.add('score_desc_img');
    img.src = './assets/img/pixel-heart.png';
    SCORE_DESC.appendChild(img);
}

// a variable that keep a specific function that calls Class (we gonna learn it soon)
let music = new Audio();

// a function that plays audio.
// If user keep clicking super fast it will never lagging because of methods inside of function.
// You can google it =))
// I call it on 182, 191, 193, 195 line
const playMusic = (file) => {
    music.pause();
    music = new Audio(file);
    music.play();
}

// a variable that keeps start index for typeWriter function. See below
let start = 0;

// a variable that will have a value later. See 169 line.
// It does not have any value now
let controlTimeOut;

// a function that animate text as typing text. I call it on 195 line
const typeWriter = () => {
  const speedOFTyping = 90;
  const text = 'Your score is : ' + score + '!';
  TYPING_TEXT.innerHTML += text.charAt(start);
  start++;
  controlTimeOut = setTimeout(typeWriter, speedOFTyping);
  // a function that works asynchronously. It means that everything inside this function
  // will happend only after some time. See time on 183 line
  setTimeout(() => {
    clearTimeout(controlTimeOut);
  }, 3000)
}

// for array of buttons (see line 2) I use method 'forEach', 
// that will use logic inside for each button in array
BUTTONS.forEach((element) => {
    // for each button i add event listener click
    element.addEventListener('click', (e) => {
        // adding audio for each click by calling specific function. See line 152
        // and add real argument
        playMusic('./assets/audio/button-sound.wav');
        // condition below checks the lens of array with questions.
        LAST_SCORE.innerHTML = ''; 
        if (currentQuestionIndex === quizQuestions.length - 1) {
            // if TRUE, it hides block with questions (display: none)
            HIDDEN_WRAPS.forEach((element) => {
                element.classList.add('hidden');
            })
            // then adds class to block with firework (display: flex, before that it was none)
            FIREWALK_WRAP.classList.add('active');
            // adds class to show a block with final score at the end
            TYPING_TEXT_WRAP.classList.add('final_score_show');
            // call function with animated text. See line 166
            SPECH_BUBLE.classList.add('show-message_wrap');
            typeWriter();
            window.localStorage.setItem('userScore', score);
            // codition that checks score and depens of it plays different type of audio
                if (score <= 30) {
                    playMusic('./assets/audio/lose.wav');
                    MESSAGE.innerHTML = 'It could be better...';
                } else if (score < 80 && score > 30) {
                    playMusic('./assets/audio/mid.wav');
                    MESSAGE.innerHTML = 'Practice more!';
                } else {
                    playMusic('./assets/audio/win.wav');
                    MESSAGE.innerHTML = 'Good job!!';
                }
            // one more asynchronous function. See description on 172 line
            setTimeout(() => {
                FIREWALK_WRAP.classList.remove('active');
            }, 9000);
            return;
        }
        // just a variable that will keep needed value below
        let flag;
        // condition that check which button was clicked and
        // depens of it will add score / pixel hearts
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
        // incrementing current index of ouestions that makes me able to show them one by one
        currentQuestionIndex++;
        QUESTIONWRAP.innerHTML = returnCurrentQuiz(quizQuestions).question;
    })
    
})





