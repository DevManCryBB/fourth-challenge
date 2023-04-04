var timerEl = document.querySelector("#countdown-timer")
var highScore = document.querySelector("#high-scores")
var question1 = document.querySelector("#question1")
var question2 = document.getElementById("question2")
var question3 = document.getElementById("question3")
var question4 = document.getElementById("question4")
var question5 = document.getElementById("question5")
var finalScoreEl = document.getElementById('final-score')
var buttons = document.querySelectorAll("button")
var questionNumber = 0
var score = 0


function answers(event){
  if (event.target.getAttribute("data-attribute")=== "true"){
    score++
    questionNumber++
    showQuestions(event)
  }
  else{
    score--
  }
console.log(event.target) 
}

function highScoreFun(){
  highScore.setAttribute("class", "container")
  finalScoreEl.textContent = score;
}

//Display and hide questions
function showQuestions(event){
if (event.target.getAttribute("data-question")=== "1"){
    question1.setAttribute("class", "container hidden")
    question2.setAttribute("class", "container")

}if (event.target.getAttribute("data-question")=== "2"){
    question2.setAttribute("class", "container hidden")
    question3.setAttribute("class", "container")
    
}if (event.target.getAttribute("data-question")=== "3"){
    question3.setAttribute("class", "container hidden")
    question4.setAttribute("class", "container")
  
}if (event.target.getAttribute("data-question")=== "4"){
    question4.setAttribute("class", "container hidden")
    question5.setAttribute("class", "container")
  
}if (event.target.getAttribute("data-question")=== "5"){
    question5.setAttribute("class", "container hidden")

  highScoreFun()
  
}
}

//Store Score
localStorage.getItem("score")
localStorage.setItem("score", score)

//Timer
function countdown() {
    var timeLeft = 100;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  countdown()

  for (var i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", answers)
  }