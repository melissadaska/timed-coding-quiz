// use mouse click to start quiz
var startButton = document.getElementById('start-quiz');

var createQuiz = function() {
    // create variables to store questions
    var questions = [
        {
            q: 'Commonly used data types DO NOT include: ',
            a1: '1. strings',
            a2: '2. booleans',
            a3: '3. alerts',
            a4: '4. numbers',
            correct: '3. alerts'
        },
        {
            q: 'The condition in an if/else statement is enclosed within ______. ',
            a1: '1. quotes',
            a2: '2. curly brackets',
            a3: '3. parentheses',
            a4: '4. square brackets',
            correct: '3. parentheses'
        },
        {
            q: 'Arrays in JavaScript can be used to store _____. ',
            a1: '1. numbers and strings',
            a2: '2. other arrays',
            a3: '3. booleans',
            a4: '4. all of the above',
            correct: '4. all of the above'
        },
        {
            q: 'String values must be enclosed within ______ when being assigned to variables. ',
            a1: '1. commas',
            a2:'2. curly brackets',
            a3:'3. quotes',
            a4:'4. parentheses',
            correct: '3. quotes'
        },
        {
            q: 'A very useful tool used during development and debugging for printing content to debugger is: ',
            a1: '1. JavaScript',
            a2:'2. terminal/bash',
            a3:'3. for loops',
            a4:'4. console.log',
            correct: '4. console.log'
        }
    ];
}


// We start the game with a score of 0.
var score = 0;

// write for loops to cycle through quiz questions
for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);
    if(answer === true && answer === questions[i].correct) {
        // increase score
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

// show total score at end
alert("You got " + score + "/" + questions.length);

// use key press events to receive user input in form of answers to quiz questions

// create time limit using functions

// use conditional statements to determine wrong or right answers

// when question is answered wrong, time is subtracted from the clock

// when all questions are answered or timer reaches 0, game is over

// use client storage to store high scores



// add eventListeners here
startButton.addEventListener('click', createQuiz);
