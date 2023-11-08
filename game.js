const riddleElement = document.getElementById("riddle");
const answer1Element = document.getElementById("ans1");
const answer2Element = document.getElementById("ans2");
const answer3Element = document.getElementById("ans3");
import { riddlesSet1 } from './riddles.js';
import { riddlesSet2 } from './riddles.js';
import { riddlesSet3 } from './riddles.js';
import { riddlesSet4 } from './riddles.js';

let currentRound = 1; 
let wrongAnswers = 0; 
var correctAnswer;

function loadQuestion() {
    const randomchoice = ["Eerie", "Spooky", "Creepy", "Haunted", "Sinister", "Macabre", "Ghoulish", "Chilling", "Terrifying", "Frightening"]
    const randomRiddleSet = Math.floor(Math.random() * 4) + 1;
    let randomRiddle;
    switch (randomRiddleSet) {
        case 1:
            randomRiddle = riddlesSet1[Math.floor(Math.random() * riddlesSet1.length)];
            break;
        case 2:
            randomRiddle = riddlesSet2[Math.floor(Math.random() * riddlesSet2.length)];
            break;
        case 3:
            randomRiddle = riddlesSet3[Math.floor(Math.random() * riddlesSet3.length)];
            break;
        case 4:
            randomRiddle = riddlesSet4[Math.floor(Math.random() * riddlesSet4.length)];
            break;
    }
    riddleElement.textContent = randomRiddle.riddle;

    correctAnswer = randomRiddle.answer;
    const randomAnswers = [correctAnswer];

    while (randomAnswers.length < 3) {
        const randomIndex = Math.floor(Math.random() * randomchoice.length);
        const randomAnswer = randomchoice[randomIndex];

        if (!randomAnswers.includes(randomAnswer)) {
            randomAnswers.push(randomAnswer);
        }
    }

    randomAnswers.sort(() => Math.random() - 0.5);

    answer1Element.textContent = randomAnswers[0];
    answer2Element.textContent = randomAnswers[1];
    answer3Element.textContent = randomAnswers[2];
}

function checkAnswer(selectedAnswer) {  
    if (selectedAnswer === correctAnswer){
      currentRound++;
      alert("wait")
      if (currentRound <= 5) {
        loadQuestion();
      } else {
        alert("Congratulations! You've completed all rounds.");
      }
    } else {
      wrongAnswers++;
      currentRound++
      if (wrongAnswers == 2){
        window.location.href = "gameover.html"
      }else{
        loadQuestion();
      }   
    }
  }

  answer1Element.addEventListener("click", () => {
    checkAnswer(answer1Element.textContent);
  });
  
  answer2Element.addEventListener("click", () => {
    checkAnswer(answer2Element.textContent);
  });
  
  answer3Element.addEventListener("click", () => {
    checkAnswer(answer3Element.textContent);
  });
  
  loadQuestion();