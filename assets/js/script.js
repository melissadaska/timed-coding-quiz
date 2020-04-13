// create variables
var startButton = document.getElementById('start-quiz');
var quizContainer = document.getElementById('quiz-container');
var quizTitle = document.getElementById('quiz-title');
var text= document.getElementById('text');
var quizAnswers = document.getElementById('quiz-answers');
var answerButtons = document.getElementsByClassName('answer-button');
var answerResponse = document.getElementById('answer-response');
var userInput = document.getElementById('input-user')
var initials = document.getElementById('initials');
var submitUserInfo = document.getElementById('submit-button');
var timer = document.getElementById('timer');
var nav = document.querySelector('nav');
var highscores = document.getElementById('highscores-nav');

// we start the with a score of 0, no time on the clock and question 0
var score = 0;
var scoreArr= [];
var timerInterval = false;
var timerSecs = 0;
var currentQuestion = 0;

// hide userInput and quiz answers from main page
userInput.style.display = 'none';
quizAnswers.style.display = 'none';

// create variable questions with choices arrays to store questions and answer choices
var questions = [
    {
        question: 'Commonly used data types DO NOT include: ',
        choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: '3. alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed within ______. ',
        choices: ['1. quotes', '2. curly brackets', '3. parentheses', '4. square brackets'],
        answer: '3. parentheses'
    },
    {
        question: 'Arrays in JavaScript can be used to store _____. ',
        choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        answer: '4. all of the above'
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables. ',
        choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parentheses'],
        answer: '3. quotes'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to debugger is: ',
        choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
        answer: '4. console.log'
    }
];

// start Countdown
function countdown() {
    // use interval function that counts down
    timerInterval = setInterval(function() {
        timerSecs --;
        timer.textContent = timerSecs;

        // if user runs out of time, alert and end game
        if (timerSecs < 1) {
            timer.textContent = 0;
            // call end quiz
            endQuiz();

            // clear timer
            clearInterval(timerInterval);
        };
        
        // clear timer if current question is 5
        if (currentQuestion === 5) {
            timer.textContent = timerSecs;
            clearInterval(timerInterval);
        }
    }, 1000)

}

// start the quiz
function startQuiz() {
    // timer starts at 75 seconds
    timerSecs = 75;
    timer.textContent = timerSecs;

    // startCountdown
    countdown();

    // call nextQuestion() to start questions
    nextQuestion();

    // start button disappear when quiz starts
    startButton.style.display = 'none';

    userInput.style.display = 'none';

}

// continue to next question
function nextQuestion() {

    // add necessary css styles

    // add contents of next page here
    quizTitle.textContent = 'Question ' + (currentQuestion + 1);
    text.textContent = questions[currentQuestion].question;

    // display answer buttons
    quizAnswers.style.display = 'block';

    // assign answer options from questions array to each of answer buttons
    answerButtons[0].textContent = questions[currentQuestion].choices[0];
    answerButtons[1].textContent = questions[currentQuestion].choices[1];
    answerButtons[2].textContent = questions[currentQuestion].choices[2];
    answerButtons[3].textContent = questions[currentQuestion].choices[3];

    // call checkAnswer function when one of the answer buttons is clicked
    for (i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', checkAnswer);
    }
}


 // check answer to see if chosen answer matches the correct answer
function checkAnswer(event) {

    // if CORRECT answer is chosen, inform user it's correct, increase score and current question
    if (event.target.textContent === questions[currentQuestion].answer) {
        answerResponse.style.display = 'block';
        answerResponse.textContent = 'Correct!';
        // answerResponse.className = 'answer-response';
        currentQuestion++;
        score++;

        // answer response will disappear after set time
        setTimeout(function(){
            answerResponse.style.display = 'none';
        }, 800);

        // end game if user is currently on question 5
        if (currentQuestion === questions.length) {
            // call end quiz
            endQuiz();
          
        // else go to next question    
        } else {
            nextQuestion();
        };

    // else if answer chosen is INCORRECT decrease timer and increase current question
    } else {
        currentQuestion++;
        answerResponse.style.display = 'block';
        answerResponse.textContent = 'Incorrect!';
        // answerResponse.className = 'answer-response';

        // answer response will disappear after set time
        setTimeout(function() {
            answerResponse.style.display = 'none';
        }, 800);

        // end game if timer is less than 10 seconds, since the user gets deducted 10 from score for incorrect answers
        if (timerSecs < 10) {
            timerSecs -= 10;
            // call end quiz
            endQuiz;

        // else end game if user is on question 5
        } else if (currentQuestion === 5) {
            // call end quiz
            endQuiz();
        
        // else subtract time from timer and move to next question
        } else {
            timerSecs -= 10;
            nextQuestion();
        };
    }
};

// end of quiz
function endQuiz() {

    // add necessary css styles to end page

    // change display to end page display
    quizAnswers.style.display = 'none';
    text.textContent = "Your final score is " + score + ".";
    userInput.style.display = 'block';

    // either let user know they ran out of time or that they are all done with quiz
    if (timerSecs <= 0) {
        quizTitle.textContent = 'You ran out of time!';
    } else {
        quizTitle.textContent = "Quiz Over!";
    }

    // initials and high score are stored when submit button clicked
    submitUserInfo.addEventListener('click', saveHighScore);
}
    

// save high score
function saveHighScore(event) {

    event.preventDefault();

    // if user does not put info in, nothing happens
    if (initials.value.length === 0) {
        return

    // else save new high score    
    } else {
        newScore = {
            userName: initials.value.trim(),
            userScore: score
        };
        scoreArr.push(newScore);

        // sort array so that highest score is on top
        scoreArr.sort((a, b) => b.userScore - a.userScore);

        // make array a string and save to localStorage
        localStorage.setItem('score', JSON.stringify(scoreArr));

        // take user to high scores
        highScores();
    }
}

// load scores from local storage into scores array
function loadHighScore() {

    // parse string value from local storage into new array
    savedScores = JSON.parse(localStorage.getItem('score'));

    // if there are no saved scores then save into score array
    if (savedScores !== null) {
        scoreArr = savedScores;

        // return new score array value
        return scoreArr;
    }
}


// view high scores
function highScores() {
    event.preventDefault();
    // clears timerInterval if countdown has been initiated
    if (timerInterval) {
        clearInterval(timerInterval);
    };

    // creates new list and return button element and append to container
    var ol = document.createElement('ol');
    var returnButton = document.createElement('button');
    var clearButton = document.createElement('button');
    returnButton.textContent = 'Go Back';
    clearButton.textContent = 'Clear High Scores';
    quizContainer.appendChild(ol);
    quizContainer.appendChild(returnButton);
    quizContainer.appendChild(clearButton);

    // removes nav and other elements
    startButton.style.display = 'none';
    nav.style.visibility = 'hidden';
    quizTitle.textContent = 'High Scores';
    text.textContent = '';
    quizAnswers.style.display = 'none';
    userInput.style.display = 'none';

    // render a new li for each highscore, sort in order of highscores

    for (i = 0; i < scoreArr.length; i++) {
        var score = scoreArr[i].userName + ' : ' + scoreArr[i].userScore;

        li = document.createElement('li');
        li.textContent = score;
        ol.appendChild(li);
    }

    // add event listener for return button to bring user back to index.html
    returnButton.addEventListener('click', function() {
        location.href = 'index.html'
    });

    // add event listener for clear button to clear high scores
    clearButton.addEventListener('click', function() {
        localStorage.clear();
        ol.innerHTML = '';
    });
};


loadHighScore();

// add other eventListeners here
startButton.addEventListener('click', startQuiz);
highscores.addEventListener('click', highScores);

