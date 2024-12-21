const correctAnswers = [...document.getElementsByClassName("correct")];
        correctAnswers.forEach(answer => {
            answer.addEventListener("click", () =>{
                const flowers = document.getElementById("flowers-container");
                flowers.classList.add("appear");
                flowers.addEventListener("animationend", () =>{
                    flowers.classList.remove("appear");
                });
                const audio = document.querySelector("audio");
                audio.play();
            });
        });

const falseAnswers = [...document.querySelectorAll("li:not(.correct)")];
    falseAnswers.forEach((answer) => {
        answer.addEventListener("click", () =>{
            answer.classList.add("false");
        });
        answer.addEventListener("animationend", () =>{
            answer.classList.remove("false");
        });
    });

const questions = [...document.querySelectorAll(".question-container")];

function MoveToNextQuestion(question, index){
    const nextQuestionIndex = (index+1) % questions.length;     //to come back to first question when it is the last one
    const nextQuestion = questions[nextQuestionIndex];
    question.classList.remove("active");
    nextQuestion.classList.add("active");
}
questions.forEach((question, index) => {
    const nextBtn = question.querySelector(".next");
    nextBtn.addEventListener("click", () =>{
        MoveToNextQuestion(question, index);
    });

    const correctAnswer = question.querySelector(".correct");
    correctAnswer.addEventListener("click", () =>{
        setTimeout(() =>{
            MoveToNextQuestion(question, index);
        }, 3000);
    });

    const prevBtn = question.querySelector(".prev");
    prevBtn.addEventListener("click", () =>{
        const prevQuestionIndex = (index-1+questions.length) % questions.length;     //to come back to first question when it is the last one
        const prevQuestion = questions[prevQuestionIndex];
        question.classList.remove("active");
        prevQuestion.classList.add("active");
    });
});
