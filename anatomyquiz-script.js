const questions = [
    {
        question: "Joints that allow for ample movement along two or more separate bones are classified as:",
        answers: ["diarthrosis", "tendons", "synarthroses", "ligamented"],
        correct: 0
    },
    {
        question: "Ligaments restrict:",
        answers: ["muscle and cartilage", "hyper-extension", "hyper-flexion", "both hyper-extension and hyper-flexion"],
        correct: 3
    },
    {
        question: "Muscles that are used for moving substances across a lumen are classified as:",
        answers: ["lymph system", "flexor reflex", "smooth muscle", "cardiac muscle"],
        correct: 2
    },
    {
        question: "Joints that are fibrous and allow for little movement between two or more bones are classified as:",
        answers: ["tendons", "cranium", "diarthrosis", "synarthrosis"],
        correct: 3
    },
    {
        question: "A band of dense, white, fibrous elastic tissue is called:",
        answers: ["ligament", "muscle filament", "cartilage", "lymph channel"],
        correct: 0
    },
    {
        question: "The functional unit of contraction within a striated muscle is:",
        answers: ["Z band", "myofibril", "sarcomere", "coronal"],
        correct: 2
    },
];

let currentQuestionIndex = 0;
let answered = false;
let score = 0;

function showQuestion() {
    answered = false;
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-button");

    questionElement.innerText = questions[currentQuestionIndex].question;
    answerButtons.innerHTML = "";
    nextButton.classList.remove("show");

    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-button");
        button.onclick = () => selectAnswer(button, index);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(button, index) {
    if (answered) return;
    answered = true;
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    if (index === correctAnswerIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
        document.querySelectorAll(".answer-button")[correctAnswerIndex].classList.add("correct");
    }
    document.getElementById("next-button").classList.add("show");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz complete! You scored ${score} out of ${questions.length}.`);
        currentQuestionIndex = 0;
        score = 0;

        showQuestion();
    }
}

showQuestion();