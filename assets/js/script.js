// use mouse click to start quiz
var startButton = document.getElementById('start-quiz');

var startQuiz = function() {
// create variables to store questions
var myQuestions = [
    {
        question: 'Commonly used data types DO NOT include: ',
        answer1: '1. strings',
        answer2: '2. booleans',
        answer3: '3. alerts',
        answer4: '4. numbers',
        correct: '3. alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed within ______. ',
        answer1: '1. quotes',
        answer2: '2. curly brackets',
        answer3: '3. parentheses',
        answer4: '4. square brackets',
        correct: '3. parentheses'
    },
    {
        question: 'Arrays in JavaScript can be used to store _____. ',
        answer1: '1. numbers and strings',
        answer2: '2. other arrays',
        answer3: '3. booleans',
        answer4: '4. all of the above',
        correct: '4. all of the above'
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables. ',
        answer1: '1. commas',
        answer2:'2. curly brackets',
        answer3:'3. quotes',
        answer4:'4. parentheses',
        correct: '3. quotes'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to debugger is: ',
        answer1: '1. JavaScript',
        answer2:'2. terminal/bash',
        answer3:'3. for loops',
        answer4:'4. console.log',
        correct: '4. console.log'
    }
];
}

// write for loops to cycle through quiz questions

// use key press events to receive user input in form of answers to quiz questions

// create time limit using functions

// use conditional statements to determine wrong or right answers

// when question is answered wrong, time is subtracted from the clock

// when all questions are answered or timer reaches 0, game is over

// use client storage to store high scores



// add eventListeners here
startButton.addEventListener('click', startQuiz);
