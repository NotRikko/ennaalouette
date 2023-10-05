
const Questions =

[   {   questionTitle: "Question 1",
        question: "What Nijisanji EN wave is Enna a part of?",
        answer: "Ethyria"

    },
    
    {   questionTitle: "Question 2",
        question: "Who does Enna Alouette use the nickname 'Babu' often for?",
        answer: "Millie"

    },

    {   questionTitle: "Question 3",
        question: "What is Enna?",
        answer: "Songbird"
    }
    
];

let currQuestion = 0

function loadQues() {
    const questionTitle = document.getElementById("questiontitle")
    const questionDescription = document.getElementById("questiondescription")

    questionTitle.textContent = Questions[currQuestion].questionTitle;
    questionDescription.textContent= Questions[currQuestion].question
    
}

loadQues();

function nextQuestion() {
    if (currQuestion < Questions.length -1) {
        currQuestion++;
        loadQues();
    } 
    else {
        alert("Finished!")
    }
}


function Reveal() {
    const selectedAns = document.getElementById("answerfield").value;
    if (selectedAns === Questions[currQuestion].answer) {
        alert("Correct!");
        nextQuestion();
    } else {
        alert("Incorrect!")
    }
}

const input = document.getElementById("answerfield");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
})




