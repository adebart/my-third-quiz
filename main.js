function aaaa(){

    // document.getElementById("mom").style.display = "block"
    // document.getElementById("mmm").style.display = "none"
    if(document.getElementById('see').value == ""){
        alert('input your name')
    }
    else{
        document.getElementById("mom").style.display = "block"
        document.getElementById("mmm").style.display = "none"
    }
}




// hhhhhhhh



const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["London", "Paris", "Berlin", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: ["Venus", "Saturn", "Jupiter", "Neptune"],
        correct: "Jupiter"
    },
    {
        question: "What is 12 multiplied by 5?",
        answers: ["60", "24", "36", "48"],
        correct: "60"
    },
    {
        question: "What is the capital of Nigeria",
        answers: ["Ikeja", "Ibadan", "lagos", "Abuja"],
        correct: "Abuja"
    },
    {
        question: "What is 20 multiplied by 5?",
        answers: ["60", "200", "120", "100"],
        correct: "100"
    }
    ,
    {
        question: "What is the hottest planet?",
        answers: ["Pluto", "Sartun", "Venus", "Mecury"],
        correct: "Mecury"
    }
    ,
    {
        question: "What is the fastest land animal?",
        answers: ["Cheeteh", "Lion", "Tiger", "Ostrich"],
        correct: "Cheeteh"
    }
    ,
    {
        question: "What is the largest desert?",
        answers: ["Sahara", "Sonoran", "Kalahari", "Simpson"],
        correct: "Sahara"
    }
    ,
    {
        question: "What is the largest ocean in the world?",
        answers: ["Alantic ", "Pacific", "Indian", "Artic"],
        correct: "100"
    }
    ,
    {
        question: "find x in 'x = 2+6/4'",
        answers: ["6", "4", "", "1"],
        correct: "4"
    }
    
];

let currentQuestion = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
function startQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    answersElement.innerHTML = "";

    for (const answer of currentQuiz.answers) {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", checkAnswer);
        answersElement.appendChild(button);
    }
    document.getElementById("rrrr").style.display = "block"
        document.getElementById("wwww").style.display = "none"
}

function nextQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    answersElement.innerHTML = "";

    for (const answer of currentQuiz.answers) {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", checkAnswer);
        answersElement.appendChild(button);
    }
    document.getElementById("rrrr").style.display = "block"
        document.getElementById("wwww").style.display = "none"
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuiz = quizData[currentQuestion];

    if (selectedAnswer === currentQuiz.correct) {
        alert("Correct!");
        // nextQuestion();
    } else {
        alert(`Incorrect. The correct answer is: ${currentQuiz.correct}`);
        // nextQuestion();
    }
    // lllll///////

    // function nextQuestion() {
    //     const currentQuiz = quizData[currentQuestion];
    //     questionElement.textContent = currentQuiz.question;
    //     answersElement.innerHTML = "";
    
    //     for (const answer of currentQuiz.answers) {
    //         const button = document.createElement("button");
    //         button.textContent = answer;
    //         button.addEventListener("click", checkAnswer);
    //         answersElement.appendChild(button);
    //     }
    //     document.getElementById("rrrr").style.display = "block"
    //         document.getElementById("wwww").style.display = "none"
    // }

    //pppppppp//
    

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        alert("Quiz completed!");
        // resetQuiz();
        mainii();
       
    }

}
function nextQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    answersElement.innerHTML = "";

    for (const answer of currentQuiz.answers) {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", checkAnswer);
        answersElement.appendChild(button);
    }
    document.getElementById("rrrr").style.display = "block"
        document.getElementById("wwww").style.display = "none"
}


// function resetQuiz() {
//     currentQuestion = 0;
//     showQuestion();
// }
function mainii(){
    document.getElementById("mmm").style.display = "block"
    document.getElementById("mom").style.display = "none"
}

showQuestion();
