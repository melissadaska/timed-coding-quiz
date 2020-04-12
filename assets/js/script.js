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
            // call end game

        // clear timer if current question is 5
    })
}

// start the quiz
function startQuiz() {
    // timer starts at 75 seconds
    timerSecs = 75;
    timer.textContent = timerSecs;

    // startCountdown

    // starts questions

    // start button disappear when quiz starts
}

// continue to next question

    // displays questions and answer choices to page

    // add contents of next page here

    // display answer buttons


    // assign answer options from questions array to each of answer buttons

    // call checkAnswer function when one of the answer buttons is clicked




 // check answer to see if chosen answer matches the correct answer

    // if CORRECT answer is chosen, inform user it's correct, increase score and current question


    // answer response will disappear after set time

    // end game if user is currently on question 5

    // else continue to next question



    // if answer chosen is INCORRECT decrease timer and increase current question


    // answer response will disappear after set time

    // end game if timer is less than 10 seconds, since the user gets deducted 10 from score for incorrect answers

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

