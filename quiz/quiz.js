
function Reveal(){
    let answer = document.getElementById("answerfield").value;
    if (answer === "Ethyria") {
        alert("Correct!");
        for ( let i = 0; i<questions.length; i++) {
            if ( i === 0 ) {
              
             let quizQuestionNumber = questions[i].questionTitle;
            let quizQuestion = questions[i].question;
             document.getElementById("question").innerHTML = quizQuestionNumber;
             document.getElementById("questionDescription").innerHTML= quizQuestion
            break;}
        }}
    else alert("WRONG!");
};

let questions =
[   
    {   questionTitle: "Question 2",
        question: "Who does Enna Alouette use the nickname 'Babu' often for?",
        answer: "Millie Parfait"

    },

    {   questionTitle: "Question 3",
        question: "What is Enna?",
        answer: "Songbird"
    }
    
];

function nextQuestion() {
    for ( let i = 0; i<questions.length; i++) {
    let quizQuestionNumber = questions[i].questionTitle;
    let quizQuestion = questions[i].question;
    document.getElementById("question").innerHTML = quizQuestionNumber;
    document.getElementById("questionDescription").innerHTML= quizQuestion

}
}


const input = document.getElementById("answerfield");


input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
})

/*
When a user inputs an answer
Check to see if answer is correct
If answer is correct, prompt correct and change question
If answer is incorrect, prompt incorrect and keep same question
When Correct
Change Function Reveal() to compare answer to new question
Total 5 questions
*/

/*
Function Reveal(){
    let answer = document.getElementById("answerfield").value;
    function questionCheck(answer)
    if (answer === true) {
        alert("Correct!");
        function nextQuestion();
    }
    else alert("WRONG!");


function questionCheck () {
    let x = answer;
    let y = truAnswer;
    if (x === y ) {
        return true;
    }
    else return false;

}

function nextQuestion (){
    question.innerText = "";
    questionDescription.innerText = "";
}

*/




