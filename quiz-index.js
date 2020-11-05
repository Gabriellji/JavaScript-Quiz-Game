const PIC = document.querySelectorAll(".pic");
const WRAPER = document.querySelector('.main_panel-roxana');
const ROXANA_BTN = document.querySelector('.roxan-button');
const JANE_BTN = document.querySelector('.jane-button');
const NADINE_BTN = document.querySelector('.nadine-button');
const VIET_BTN = document.querySelector('.viet-button');
const POXANA_WRAP = document.querySelector('.roxana_wrap');
const JANE_WRAP = document.querySelector('.jane_wrap');
const NADINE_WRAP = document.querySelector('.nadine_wrap');
const VIET_WRAP = document.querySelector('.viet_wrap');
const CLOSE_BTN = document.querySelectorAll('.close');
const BUTTONS = document.querySelectorAll('.mybutton'); 
const HIDDEN_WRAPS = document.querySelectorAll('.hide');
const QUESTIONWRAP = document.querySelector('.question');
const TYPING_TEXT_WRAP = document.querySelector('.final_score');
const FIREWALK_WRAP = document.querySelector('.pyro');
const TYPING_TEXT = document.querySelector('.type_text');
const SCORE_BOX = document.querySelector('.points');
const SCORE_DESC = document.querySelector('.score_desc');
const SPECH_BUBLE = document.querySelector('.message_wrap');
const MESSAGE = document.querySelector('.message_text');
const LAST_SCORE = document.querySelector('.last');
const CHARACTERS_BUTTONS = document.querySelectorAll('.power');
const PRE_GAME_WRAP = document.querySelector('.characters');
const ANSWER_BUTTONS = document.querySelectorAll('.tip');
const VIET_POWER = document.querySelector('.viet_power');
const TIP_WRAP = document.querySelector('.tip_wrap');
const TIP_TEXT = document.querySelector('.tip_text');
const SCORE_BUST = document.querySelector('.score_bust');
const SCORE_BUST_TEXT = document.querySelector('.score_bust_text');
const ONE_SECOND_DIV = document.querySelector('.one_second');
const ROXANA_POWER_WRAP = document.querySelector('.roxana_power');
const TREASURE_CHEST = document.querySelector('.treasure');

const HOME_BTN = document.querySelector('.home');
const ABOUT_BTN = document.querySelector('.about');
const FINAL_BTN = document.querySelectorAll('.final_btn');

const userStringFromLocalStorage = localStorage.getItem('userScore');
LAST_SCORE.innerHTML = userStringFromLocalStorage;

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
        question: 'Can we multiply a string with a number?',
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

QUESTIONWRAP.innerHTML = quizQuestions[0].question;
SCORE_BOX.innerHTML = 0;

let score = 0;
let currentQuestionIndex = 0;

const returnCurrentQuiz = (array) => {
    return array[currentQuestionIndex];
};

const drawPixelHeart = () => {
    const img = document.createElement('img');
    img.classList.add('score_desc_img');
    img.src = './assets/img/pixel-heart.png';
    SCORE_DESC.appendChild(img);
};

const drawPixelPurpleHeart = () => {
    const img = document.createElement('img');
    img.classList.add('score_desc_img');
    img.src = './assets/img/purple.png';
    SCORE_DESC.appendChild(img);
    img.innerHTML = '';
};

const hide = (element) => {
    element.style.display = 'none';
};

let music = new Audio();

const playMusic = (file) => {
    music.pause();
    music = new Audio(file);
    let startPlayPromise = music.play();
    if (startPlayPromise !== undefined) {
        startPlayPromise.then(() => { 
            music.play();
        }).catch(error => {
          console.log(error);
        });
      }
};

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
  }, 3000);
};

CLOSE_BTN.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.add('scale-out-center');
        
        WRAPER.style.display = 'unset';
        setTimeout(() => { 
            btn.parentElement.classList.remove('scale-out-center');
            btn.parentElement.style.display = 'none';
        }, 1000);
    });
});

PIC.forEach((item)=>{
    item.addEventListener('click', (el) => {
       if(el.target.classList.contains('roxana')){
        POXANA_WRAP.style.display = 'flex';
        POXANA_WRAP.classList.add('scale-in-center');
        ROXANA_BTN.style.display = 'flex';
       }else if(el.target.classList.contains('jane')){
        JANE_WRAP.style.display = 'flex';
        JANE_WRAP.classList.add('scale-in-center');
        JANE_BTN.style.display = 'flex';
       }else if(el.target.classList.contains('nadine')){
        NADINE_WRAP.style.display = 'flex';
        NADINE_WRAP.classList.add('scale-in-center');
        NADINE_BTN.style.display = 'flex';
       }else {
        VIET_WRAP.style.display = 'flex';
        VIET_WRAP.classList.add('scale-in-center');
        VIET_BTN.style.display = 'flex';
       }
        WRAPER.style.display = 'none';
    });
});


CHARACTERS_BUTTONS.forEach((button) => {
    button.addEventListener('mouseover', () => {
        playMusic('./assets/audio/choose.wav');
    });
    button.addEventListener('click', (e) => {
        playMusic('./assets/audio/success.wav');
        PRE_GAME_WRAP.classList.add('scale-out-ver-bottom');
        if(e.target.classList.contains('viet-button')) {
            hide(VIET_WRAP);
            VIET_POWER.classList.add('show-power');
        } else if (e.target.classList.contains('nadine-button')) {
            hide(NADINE_WRAP);
            SCORE_BUST.classList.add('show-bust');
        } else if (e.target.classList.contains('roxan-button')) {
            hide(POXANA_WRAP);
            ROXANA_POWER_WRAP.classList.add('show-treasure');
        } else {
            hide(JANE_WRAP);
        }
        setTimeout(() => { PRE_GAME_WRAP.style.display = 'none'}, 1000);
    });
});

ANSWER_BUTTONS.forEach((btn) => {
    btn.addEventListener('click', (el) => {
        playMusic('./assets/audio/bonus.wav');
        let correctAnswer = returnCurrentQuiz(quizQuestions).isCorrect;
        el.target.classList.add('hidden');
        if (correctAnswer) {
            TIP_TEXT.classList.remove('pink');
            TIP_TEXT.classList.add('green');
        } else {
            TIP_TEXT.classList.remove('green');
            TIP_TEXT.classList.add('pink');
        }
        TIP_WRAP.classList.add('show-tip');
        TIP_TEXT.innerHTML = correctAnswer;
        setTimeout(() => { TIP_WRAP.classList.remove('show-tip') }, 2000);
    })
})



BUTTONS.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (currentQuestionIndex === quizQuestions.length - 1) {
            HIDDEN_WRAPS.forEach((element) => {
                element.classList.add('hidden');
            });
            FIREWALK_WRAP.classList.add('active');
            TYPING_TEXT_WRAP.classList.add('final_score_show');
            SPECH_BUBLE.classList.add('show-message_wrap');
            typeWriter();
            window.localStorage.setItem('userScore', score);
                if (score <= 60) {
                    playMusic('./assets/audio/lose.wav');
                    MESSAGE.innerHTML = 'It could be better...';
                } else if (score < 120 && score > 60) {
                    playMusic('./assets/audio/mid.wav');
                    MESSAGE.innerHTML = 'Practice more!';
                } else {
                    playMusic('./assets/audio/win.wav');
                    MESSAGE.innerHTML = 'Good job!!';
                }
            setTimeout(() => {
                FIREWALK_WRAP.classList.remove('active');
            }, 9000);
            setTimeout(() => {
                HOME_BTN.style.display = 'unset';
                HOME_BTN.classList.add('scale-in-center');
                ABOUT_BTN.style.display = 'unset';
                ABOUT_BTN.classList.add('scale-in-center');
            }, 4000);
            return;
        }
        playMusic('./assets/audio/error.wav');
        let optionToBoolean = e.target.innerHTML.toLowerCase() === "true";
        let answer = returnCurrentQuiz(quizQuestions).isCorrect;
        if(optionToBoolean == answer) {
            playMusic('./assets/audio/true-false-sound.wav');
                if ((currentQuestionIndex + 1) % 4 === 0) {
                    SCORE_BUST_TEXT.classList.add('show-bust');
                    SCORE_BUST_TEXT.addEventListener('click', () => {
                        playMusic('./assets/audio/collect.wav');
                        ONE_SECOND_DIV.innerHTML = '+10';
                        ONE_SECOND_DIV.classList.add('fade-in-fwd');
                        score+=10;
                        drawPixelPurpleHeart();
                        SCORE_BOX.innerHTML = score;
                        SCORE_BUST_TEXT.classList.remove('show-bust');
                        setTimeout(() => { ONE_SECOND_DIV.classList.add('fade-out-bck') }, 2000);
                        setTimeout(() => { ONE_SECOND_DIV.classList.remove('fade-out-bck', 'fade-in-fwd') }, 3000);
                    });
                } 
                if ((currentQuestionIndex + 1) % 6 === 0) {
                    TREASURE_CHEST.classList.add('show-treasure');
                    TREASURE_CHEST.addEventListener('click' , () => {
                        playMusic('./assets/audio/bonus2.wav');
                        ONE_SECOND_DIV.innerHTML = '+20';
                        ONE_SECOND_DIV.classList.add('fade-in-fwd');
                        score+=20;
                        drawPixelPurpleHeart();
                        SCORE_BOX.innerHTML = score;
                        TREASURE_CHEST.classList.remove('show-treasure');
                        setTimeout(() => { ONE_SECOND_DIV.classList.add('fade-out-bck') }, 2000);
                        setTimeout(() => { ONE_SECOND_DIV.classList.remove('fade-out-bck', 'fade-in-fwd') }, 3000);
                    });
                }
                score+=10; 
                drawPixelHeart();
                SCORE_BOX.innerHTML = score;
        }
        currentQuestionIndex++;
        QUESTIONWRAP.innerHTML = returnCurrentQuiz(quizQuestions).question;
    });
    
});

const buttonsClickHandler = () => {
    FINAL_BTN.forEach(elem => {
        elem.addEventListener('click', (event) => {
            if(event.target.classList.contains('home')) {
                window.location.reload();
            } else {
                window.location.href = './finalpage-index.html';
            }
        });
    });
};

buttonsClickHandler();