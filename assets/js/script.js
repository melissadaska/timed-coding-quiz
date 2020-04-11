// use mouse click to start quiz
var startButton = document.getElementById('start-quiz');
var quizContainer = document.getElementById('quiz-container');
var questionsDiv = document.getElementById('questions-div');
var olCreate = document.createElement("ol");

// We start the game with a score of 0.
var score = 0;
var questionArray = 0;

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


// Renders questions and answer choices to page
function render(questionArray) {
    questionsDiv.innerHTML = "";
    olCreate.innerHTML = "";

    // write for loops to cycle through quiz questions
    for (var i = 0; i < questions.length; i++) {
        // appends question
        var userQuestion = questions[questionArray].question;
        var userChoices = question[questionArray].choices;
        questionsDiv.textContent = userQuestion;
    }

    // Create new item for each question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(olCreate);
        olCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Compare choices with answer (use conditional statements to determine right/wrong answers)
function compare(event) {
    var item = event.target;

    if (item.equals("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        // when question is answered correctly, increase score and tell user they are correct
        if (item.textContent === questions[questionArray].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } else {
        // when question is answered wrong, subtract time from clock and tell user they are wrong

            createDiv.textContent = "Wrong!";
        }
    }

    // Determine which number question user is on
    questionArray++;

    if(questionArray >= questions.length) {
        // quizComplete will append page with user score
        quizComplete();
        createDiv.textContent = "All done! Your final score is " + score
    } else {
        // continue with questions
        render(questionArray);
    }
    questionsDiv.appendChild(createDiv);
        
}

// show total score at end


// use key press events to receive user input in form of answers to quiz questions

// create time limit using functions

// when all questions are answered or timer reaches 0, game is over

// use client storage to store high scores

// add eventListeners here

