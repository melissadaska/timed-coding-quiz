// use mouse click to start quiz
var startButton = document.getElementById('start-quiz');
var quizContainer = document.getElementById('quiz-container');
var quizTitle = document.getElementById('quiz-title');
var introP = document.getElementById('intro');
var quizAnswers = document.getElementById('quiz-answers');
var answerButtons = document.getElementById('answer-button');
var answerResponse = document.getElementById('answer-response');
var userInput = document.getElementById('input-user')
var initials = document.getElementById('initials');
var submitUserInfo = document.getElementById('submit-button');
var timer = document.getElementById('timer');

// we start the with a score of 0, no time on the clock and on the 1st question
var score = 0;
var scoreArr= [];
var timerInterval = false;
var timeLeft = 0;
var currentQuestion = 0;

// create variable with arrays to store questions
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
    //use interval function that counts down
    timerInterval = setInterval(function() {
        timerSecs --;
        timer.textTextContent = timerSecs;

        // if user runs out of time, alert and end game
        if (timerSecs < 1) {
            timer.textContent = 0;
            // call end game

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

    // call starts questions

    // start button disappear when quiz starts
    startButton.style.display = 'none';
}

// continue to next question
function NextQuestion() {

    // add css styles to questions and answer choices to page

    // add contents of next page here
    question.textContent = 'Question ' + (currentQuestion + 1);
    question.textContent = questions[currentQuestion].question;

    // display answer buttons
    quizAnswers.style.display = 'block';

    // assign answer options from questions array to each of answer buttons
    answerButtons[0].textContent = questions[currentQuestion].choices[0];
    answerButtons[1].textContent = questions[currentQuestion].choices[1];
    answerButtons[2].textContent = questions[currentQuestion].choices[2];
    answerButtons[3].textContent = quesitons[currentQuestion].choices[3];

    // call checkAnswer function when one of the answer buttons is clicked
    for (i = 0; i < answerButtons.clientHeight; i++) {
        answerButtons[i].addEventListener('click', checkAnswer);
    }
}


 // check answer to see if chosen answer matches the correct answer
function checkAnswer(event) {

    // if CORRECT answer is chosen, inform user it's correct, increase score and current question
    if (event.target.textContent === questions[currentQuestion].answer) {
        answerResponse.style.display = 'block';
        answerResponse.textContent = 'Correct!';
        answerResponse.className = 'answer-response'
        currentQuestion++;
        score++;

        // answer response will disappear after set time
        setTimeout(function(){
            answerResponse.style.display = 'none';
        }, 500);

        // end game if user is currently on question 5
        if (currentQuestion === questions.length) {
            // call end quiz
          
        // else go to next question    
        } else {
            NextQuestion();
        };

    // else if answer chosen is INCORRECT decrease timer and increase current question
    } else {
        currentQuestion++;
        answerResponse.style.display = 'block';
        answerResponse.textContent = 'Incorrect!';
        answerResponse.className = 'answer-response';

        // answer response will disappear after set time
        setTimeout(function() {
            answerResponse.style.display = 'none';
        }, 500);

        // end game if timer is less than 10 seconds, since the user gets deducted 10 from score for incorrect answers
        if (timerSecs < 10) {
            timerSecs -= 10;
            // call end game

        // or end game if user is on question 5
        } else if (currentQuestion === 5) {
            // call end game
        
        // else subtract time from timer and move to next question
        } else {
            timerSecs -= 10;
            NextQuestion();
        };
    }

};





    


    

    

    // end game if user is currently on question 5

    // else continue to next question


// end of quiz


    // change display to end page display

    // initials are stored when submit button is clicked


// use client storage to store high scores
// take user to high scores page


// load scores from local storage into scores array


// view high scores


// add eventListeners here

