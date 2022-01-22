var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 90;
var totalPoints = 0;
var end = false;


var points = function () {
    totalPoints = totalPoints + 10;
    console.log("You have " + totalPoints + " points!");
}
var timer = function () {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerEl.textContent = timeLeft;
            timeLeft--;
            return timeLeft;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);

    console.log("Your timer has started!")
    if (end === true) {
        timerEl.textContent = timeLeft;
    }
}


var highScores = function () {

    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "hs-container";
    mainEl.appendChild(highScoreContainer);


    var title = document.createElement("h1");
    title.className = "high-score-title";
    title.textContent = "High Scores";
    highScoreContainer.appendChild(title);


    var firstName = localStorage.getItem("name");
    var score = localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboard-score";
    leaderboardScore.textContent = "1." + firstName + " - " + score;
    highScoreContainer.appendChild(leaderboardScore);



    var leaderboard = document.createElement("div");
    leaderboard.className = "leaderboard";
    highScoreContainer.appendChild(leaderboard);

    var goBack = document.createElement("button");
    goBack.className = "go-back-btn";
    goBack.textContent = "Retake";
    goBack.addEventListener("click", event => {
        totalPoints = 0;
        end = false;
        timeLeft = 75;
        highScoreContainer.remove();
        start();
    })
    leaderboard.appendChild(goBack);

    var clearHighScore = document.createElement("button");
    clearHighScore.className = "clear-highScore";
    clearHighScore.textContent = "Clear Scores";
    clearHighScore.addEventListener("click", event => {
        localStorage.removeItem("name")
        localStorage.removeItem("score")
        leaderboardScore.remove();
    })
    leaderboard.appendChild(clearHighScore);
}

var enterScore = function () {
    var doneContainer = document.createElement("div");
    doneContainer.className = "done-container";
    mainEl.appendChild(doneContainer);

    var done = document.createElement("h1");
    done.textContent = "You finished the quiz!";
    done.className = "done-title";
    doneContainer.appendChild(done);

    var score = document.createElement("h4");
    score.textContent = "Your final score is " + totalPoints;
    score.className = "score";
    doneContainer.appendChild(score);


    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    doneContainer.appendChild(inputContainer);


    var label = document.createElement("label");
    label.textContent = "Enter Name:";
    label.className = "label";
    label.setAttribute("for", "input");
    inputContainer.appendChild(label);

    var nameInput = document.createElement("Input");
    nameInput.className = "score-input";
    nameInput.setAttribute("id", "input")
    nameInput.setAttribute("name", "input");
    nameInput.setAttribute("type", "text");
    inputContainer.appendChild(nameInput);

    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "submit-btn";
    submit.addEventListener("click", event => {

        var initals = document.getElementById("input").value;

        localStorage.setItem("name", initals);

        localStorage.setItem("score", totalPoints);

        doneContainer.remove();

        highScores();
    })
    inputContainer.appendChild(submit);
}

var questionFive = function () {
    var removeWrong = function () {
        ;
        questionContainer.remove();
        enterScore();
        console.log("Sorry! That answer is wrong");
        end = true;
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which element is used to store and manipulate text, usually in multiples, in JavaScript?";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Strings";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        points();
        questionContainer.remove();
        enterScore();
        console.log("Correct!");
        end = true;
    })

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Arrays";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Variables";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. What?";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
}

var questionFour = function () {
    var removeWrong = function () {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFive();
        console.log("Sorry! That answer is wrong");
        return timeLeft;
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "What is the definition of 'Boolean'?";
    questionContainer.appendChild(question);

    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. A math equation commonly found in Calculus";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. A form of data with infinite possible values";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. An exotic animal commonly found in South America";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. A form of data with only two possible values of 'True' and 'False'";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        questionContainer.remove();
        questionFive();
        console.log("Correct!");
        points();
    })
}

var questionThree = function () {

    var removeWrong = function () {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFour();
        console.log("Sorry! That answer is wrong");
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "The Bootstrap grid system is based on how many columns?";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Six";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Three";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Twelve";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionFive();
        console.log("Correct!");
        points();
    })

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "2. Three";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
}

var questionTwo = function () {

    var removeWrong = function () {
        questionThree();
        questionContainer.remove();
        timeLeft = timeLeft - 10;
        console.log("Sorry! That answer is wrong");
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "How do you write an IF statement in JavaScript?";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. if i = 5";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. if i = 5 then";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    });

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. if (i === 5)";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        console.log("Correct!");
        points();
    });

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. if i == 5 then";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    });
}

var questionOne = function () {

    var removeWrong = function () {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionTwo();
        console.log("Sorry! That answer is wrong");
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "How do you display hyperlinks without an underline in CSS?";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. a {underline:none;}";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. a {decoration:no-underline;}";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. a {text-decoration:none;}";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionTwo();
        console.log("Correct!");
        points();
    })

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. a {text-decoration:no-underline;}";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
    console.log("Question One");
}

var start = function () {

    var container = document.createElement("div");
    container.className = "home-container"
    mainEl.appendChild(container);


    var homeHeader = document.createElement("h1");
    homeHeader.className = "home-title";
    homeHeader.textContent = "Welcome to the Coding Quiz!";
    container.appendChild(homeHeader);


    var homeParagraph = document.createElement("p");
    homeParagraph.className = "home-text-p";
    homeParagraph.textContent = "Let's test your coding knowledge. Answer the questions about JavaScript, CSS, and Bootstrap in 90 seconds or less to see if you can beat the high score."
    container.appendChild(homeParagraph);


    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "home-btn";
    startQuizBtn.textContent = "Let's Play!";
    container.appendChild(startQuizBtn);

    startQuizBtn.addEventListener("click", event => {
        timer();
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        questionOne();
    });
}
start();