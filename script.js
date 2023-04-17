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

 // QUIZ NBA

const nba = [
    {
        questionNba: "Who is the all-time leading scorer in the NBA?",
        answersNba: [
            {text: "Nikola Jokic", correct: false},
            {text: "LeBron James", correct: true},
            {text: "Stephen Curry", correct: false},
            {text: "Michael Jordan", correct: false},
        ]
    },
    {
        questionNba: "Who is the all-time leader in 3-pointers made in the NBA?",
        answersNba: [
            {text: "Shaquille O'Neal", correct: false},
            {text: "LeBron James", correct: false},
            {text: "Stephen Curry", correct: true},
            {text: "Michael Jordan", correct: false},
        ]
    },
    {
        questionNba: "How many NBA championships have the Los Angeles Lakers won?",
        answersNba: [
            {text: "5", correct: false},
            {text: "10", correct: false},
            {text: "13", correct: false},
            {text: "17", correct: true},
        ]
    },
    {
        questionNba: "Who is the all-time leader in free throws made in a single NBA season?",
        answersNba: [
            {text: "Shaquille O'Neal", correct: true},
            {text: "LeBron James", correct: false},
            {text: "Stephen Curry", correct: false},
            {text: "Michael Jordan", correct: false},
        ]
    },
    {
        questionNba: "Who is the all-time leader in points per game in the NBA?",
        answersNba: [
            {text: "Shaquille O'Neal", correct: false},
            {text: "LeBron James", correct: false},
            {text: "Stephen Curry", correct: false},
            {text: "Michael Jordan", correct: true},
        ]
    },
 ];

 // QUIZ NFL

const nfl = [
    {
        question: "When was the NFL founded?",
        answers: [
            {text: "1935", correct: false},
            {text: "1920", correct: true},
            {text: "1950", correct: false},
            {text: "1940", correct: false},
        ]
    },
    {
        question: "Who won the first Super Bowl?",
        answers: [
            {text: "Kansas City Chiefs", correct: false},
            {text: "Oakland Raiders", correct: false},
            {text: "Green Bay Packers", correct: true},
            {text: "Chicago Bears", correct: false},
        ]
    },
    {
        question: "Who is the youngest player in NFL history?",
        answers: [
            {text: "Richard Sligh", correct: false},
            {text: "William The Refrigerator", correct: false},
            {text: "Brett Favre", correct: false},
            {text: "Fred Becker", correct: true},
        ]
    },
    {
        question: "Who has the most receiving yards in a single game?",
        answers: [
            {text: "Floyd Little", correct: true},
            {text: "Kurt Warner", correct: false},
            {text: "Joe Kapp", correct: false},
            {text: "Drew Brees", correct: false},
        ]
    },
    {
        question: "Who has the most interceptions in a single season?",
        answers: [
            {text: "Eric Dickerson", correct: false},
            {text: "Michael Strahan", correct: false},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Paul Krause", correct: true},
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

 // modal element
let modal = document.getElementById("modal");
let modalNba = document.getElementById("modalNba");
let btnModal = document.getElementById("soccer");
let btnModalNba = document.getElementById("nba");
let btnModalNfl = document.getElementById("nfl");
let span = document.getElementsByClassName("close")[0];
let spanNba = document.getElementsByClassName("closeNba")[0];

btnModal.onclick = function() {
  modal.style.display = "block";
}

btnModalNba.onclick = function() {
    modalNba.style.display = "block";
}
btnModalNfl.onclick = function() {
    modalNfl.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

spanNba.onclick = function() {
    modalNba.style.display = "none";
}

// NBA QUIZ

const questionElementNba = document.getElementById("questionNba");
const answerButtonsNba = document.getElementById("answer-buttonsNba");
const nextButtonNba = document.getElementById("next-btnNba");


 let currentQuestionIndexNba = 0;
 let scoreNba = 0;

 function startQuizNba(){
    currentQuestionIndexNba = 0;
    scoreNba = 0;
    nextButtonNba.innerHTML = "Next";
    showQuestionNba();
 }

 function showQuestionNba(){
    resetStateNba();
    let currentQuestionNba = nba[currentQuestionIndexNba];
    let questionNoNba = currentQuestionIndexNba + 1;
    questionElementNba.innerHTML = questionNoNba + ". " + currentQuestionNba.questionNba;

    currentQuestionNba.answersNba.forEach(answer => {
        const buttonNba = document.createElement("buttonNba");
        buttonNba.innerHTML = answer.text;
        buttonNba.classList.add("btnNba");
        answerButtonsNba.appendChild(buttonNba);
        if(answer.correct){
            buttonNba.dataset.correct = answer.correct;
        }
        buttonNba.addEventListener("click", selectAnswer);
    });
 }

 function resetStateNba(){
    nextButtonNba.style.display = "none";
    while(answerButtonsNba.firstElementChild){
        answerButtonsNba.removeChild(answerButtonsNba.firstChild);
    }
 }

 function selectAnswerNba(e){
    const selectedBtnNba = e.target;
    const isCorrect = selectedBtnNba.dataset.correct === "true";
    if(isCorrect){
        selectedBtnNba.classList.add("correct");
        scoreNba++;
    }else{
        selectedBtnNba.classList.add("incorrect");
    }

    Array.from(answerButtonsNba.children).forEach(buttonNba => {
        if(buttonNba.dataset.correct === "true"){
            buttonNba.classList.add("correct");
        }
        buttonNba.disabled = true;
    });
    nextButtonNba.style.display = "inline";
 }

 function showScoreNba(){
    resetStateNba();
    questionElementNba.innerHTML = `You scored ${scoreNba} out of ${nba.length}!`;
    nextButtonNba.innerHTML = "Play Again";
    nextButtonNba.style.display = "block";
 }

 function handleNextButtonNba(){
    currentQuestionIndexNba++;
    if(currentQuestionIndexNba < nba.length){
        showQuestionNba();
    }else{
        showScoreNba();
    }
 }

 nextButtonNba.addEventListener("click", ()=>{
    if(currentQuestionIndex < nba.length){
        handleNextButtonNba();
    }else{
        startQuizNba();
    }
 })

 startQuizNba();
