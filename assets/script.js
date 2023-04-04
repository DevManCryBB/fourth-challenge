var timerEl = document.querySelector("#countdown-timer")
var highScore = document.querySelector("#high-scores")
var question1 = document.querySelector("#question1")


// show a new container with the question and 4 choices
question1 = document.getElementById("question1")



// // check answers
// // checkAnswer(event){
    
// // }

// var TimeLeft = document.getElementById

// Timer that counts down from 5
function countdown() {
    var timeLeft = 100;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
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

        displayMessage();
      }
    }, 1000);
  }

  countdown()
// }