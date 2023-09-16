const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correctAnswer: "B"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        correctAnswer: "B"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Madrid", "Paris"],
        correctAnswer: "C"
    },

    {question: "Which of the following cities is organizing the recent G20 summit going to be held in 2023?",
    options: ["Brisbane", "Osaka", "India","Antalya"],
        correctAnswer: "C"
    },
    {

question: "Which place in india G20 is going to held?",
options: ["Brisbane", "Osaka", "Delhi","Antalya"],
correctAnswer: "C"

   }

];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const startOverButton = document.getElementById("start-over-button");
const scoreElement = document.getElementById("score");
const scoreValueElement = document.getElementById("score-value");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const choicesdiv =document.createElement("div");
       const label = document.createElement("label");
         label.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(65 + index)}"> ${option}`;
        optionsContainer.appendChild(choicesdiv);
        optionsContainer.appendChild(label);
        
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            // Display the final score
            questionText.textContent = "Quiz Completed!";
            optionsContainer.style.display = "none";
            nextButton.style.display = "none";
            scoreElement.style.display = "block";
            scoreValueElement.textContent = score;
            startOverButton.style.display = "block";
        }
    } else {
        alert("Please select an answer.");
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    questionText.style.display = "block";
    optionsContainer.style.display = "block";
    nextButton.style.display = "block";
    scoreElement.style.display = "none";
    startOverButton.style.display = "none";
}

nextButton.addEventListener("click", checkAnswer);
startOverButton.addEventListener("click", restartQuiz);

// Initial display
displayQuestion();
