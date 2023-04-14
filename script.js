 const questions = [
    {
        question: "Who won the 2018 FIFA World Cup?",
        answers: [
            {text: "Brazil", correct: false},
            {text: "France", correct: true},
            {text: "Croatia", correct: false},
            {text: "Belgium", correct: false},
        ]
    },
    {
        question: "Who did Zinedine Zidane headbutt in the 2006 final?",
        answers: [
            {text: "Materazzi", correct: true},
            {text: "Ronaldo", correct: false},
            {text: "Messi", correct: false},
            {text: "Cannavaro", correct: false},
        ]
    },
    {
        question: "What was the first World Cup trophy called?",
        answers: [
            {text: "Joseph Blater", correct: false},
            {text: "Puskas", correct: false},
            {text: "Jose Bernabeu", correct: false},
            {text: "Jules Rimet", correct: true},
        ]
    },
    {
        question: "In what year did Spain win their first World Cup?",
        answers: [
            {text: "2014", correct: false},
            {text: "2010", correct: true},
            {text: "2006", correct: false},
            {text: "1994", correct: false},
        ]
    },
    {
        question: "Who was the top scorer in the 2002 FIFA World Cup?",
        answers: [
            {text: "Klose", correct: false},
            {text: "Zidane", correct: false},
            {text: "Ronaldo Nazario", correct: true},
            {text: "Ronaldinho Gaucho", correct: false},
        ]
    },
 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstElementChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })

 startQuiz();
