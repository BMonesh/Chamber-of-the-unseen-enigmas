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
let videoPopupShown = false;
let heartbeatAudio = document.getElementById("heartbeat");
let tintElement = document.getElementById("tint");

function loadQuestion() {
    const randomchoice = [
        "Nosferatu",
        "Winged creature",
        "Specter",
        "Spooky residence",
        "Maze of fear",
        "Dream distortion",
        "Arachnid",
        "Spirit board",
        "Silhouette",
        "Faceless entity",
        "Gravestone",
        "Mysterious steps",
        "Pictorial",
        "Undead",
        "Eerie murmurs",
        "Traces of gore",
        "Interdimensional gateway",
        "Bog monster",
        "Terrifying jester",
        "Fatal chess game"
      ];
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
  if (selectedAnswer === correctAnswer) {
      currentRound++;
      const doorSound = document.getElementById("doorSound");
      doorSound.play();
      if (currentRound <= 5) {
          loadQuestion();
      } else {
          window.location.href = "gamewin.html";
      }
  } else {
      wrongAnswers++;
      currentRound++;

      if (wrongAnswers === 1 && !videoPopupShown) {
          if (heartbeatAudio.paused) {
              heartbeatAudio.loop = true;
              heartbeatAudio.play();
              loadQuestion()
              doorSound.play();
              const ghostscream = document.getElementById("ghostScreamAudio");
              ghostscream.play();
          }
      } else if (wrongAnswers === 2) {
          if (!videoPopupShown) {
            stopHeartbeatAudio()
            videoPopupShown = true;
            videoModal.style.display = "block";
            video.play();
            video.addEventListener("ended", function() {
                window.location.href = "gameover.html";
            });
        } else {
            window.location.href = "gameover.html";
        }

      }
  }
}

function stopHeartbeatAudio() {
  if (!heartbeatAudio.paused) {
      heartbeatAudio.pause();
      heartbeatAudio.currentTime = 0;
  }
}
tintElement.style.animationPlayState = "running";
tintElement.addEventListener("animationiteration", function() {
  tintElement.style.animationPlayState = "running";
});

const video = document.getElementById("video");
video.addEventListener("ended", function() {
    video.style.display = "none";
});
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