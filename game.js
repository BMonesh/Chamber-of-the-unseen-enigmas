// Get references to HTML elements
const riddleElement = document.getElementById("riddle");
const answer1Element = document.getElementById("ans1");
const answer2Element = document.getElementById("ans2");
const answer3Element = document.getElementById("ans3");
const tintElement = document.getElementById("tint");

// Import riddle sets from external file
import { riddlesSet1 } from './riddles.js';
import { riddlesSet2 } from './riddles.js';
import { riddlesSet3 } from './riddles.js';
import { riddlesSet4 } from './riddles.js';

// Variables for game state and control
let currentRound = 1;
let wrongAnswers = 0;
let correctAnswer;
let videoPopupShown = false;
let heartbeatAudio = document.getElementById("heartbeat");

// Keep track of used questions for each set
let usedQuestionsSet1 = [];
let usedQuestionsSet2 = [];
let usedQuestionsSet3 = [];
let usedQuestionsSet4 = [];

// Function to load a random question and set up answer choices
function loadQuestion() {
    // Array of potential riddle topics
    const randomchoice = [
        "Nosferatu", "Winged creature", "Specter", "Spooky residence", "Maze of fear", "Dream distortion",
        "Arachnid", "Spirit board", "Silhouette", "Faceless entity", "Gravestone", "Mysterious steps",
        "Pictorial", "Undead", "Eerie murmurs", "Traces of gore", "Interdimensional gateway", "Bog monster",
        "Terrifying jester", "Fatal chess game"
    ];

    // Generate a random set of riddles
    const randomRiddleSet = Math.floor(Math.random() * 4) + 1;
    let randomRiddle;

    // Select a random riddle from the chosen set, avoiding used questions
    switch (randomRiddleSet) {
        case 1:
            randomRiddle = getRandomUnusedQuestion(riddlesSet1, usedQuestionsSet1);
            usedQuestionsSet1.push(randomRiddle.index);
            break;
        case 2:
            randomRiddle = getRandomUnusedQuestion(riddlesSet2, usedQuestionsSet2);
            usedQuestionsSet2.push(randomRiddle.index);
            break;
        case 3:
            randomRiddle = getRandomUnusedQuestion(riddlesSet3, usedQuestionsSet3);
            usedQuestionsSet3.push(randomRiddle.index);
            break;
        case 4:
            randomRiddle = getRandomUnusedQuestion(riddlesSet4, usedQuestionsSet4);
            usedQuestionsSet4.push(randomRiddle.index);
            break;
    }

    // Display the riddle text
    riddleElement.textContent = randomRiddle.riddle;

    // Set the correct answer and generate random incorrect answers
    correctAnswer = randomRiddle.answer;
    const randomAnswers = [correctAnswer];

    while (randomAnswers.length < 3) {
        const randomIndex = Math.floor(Math.random() * randomchoice.length);
        const randomAnswer = randomchoice[randomIndex];

        if (!randomAnswers.includes(randomAnswer)) {
            randomAnswers.push(randomAnswer);
        }
    }

    // Shuffle the answer choices randomly
    randomAnswers.sort(() => Math.random() - 0.5);

    // Display the answer choices
    answer1Element.textContent = randomAnswers[0];
    answer2Element.textContent = randomAnswers[1];
    answer3Element.textContent = randomAnswers[2];
}

// Function to get a random unused question from a set
function getRandomUnusedQuestion(riddleSet, usedQuestions) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * riddleSet.length);
    } while (usedQuestions.includes(randomIndex));

    return { ...riddleSet[randomIndex], index: randomIndex };
}

// Function to check the selected answer and update game state
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
        // Correct answer: increment round, play sound, and load next question or end game
        currentRound++;
        const doorSound = document.getElementById("doorSound");
        doorSound.play();

        if (currentRound <= 7) {
            loadQuestion();
        } else {
            window.location.href = "gamewin.html";
        }
    } else {
        // Incorrect answer: increment wrong answers, trigger events based on wrong answers count
        wrongAnswers++;
        currentRound++;

        if (wrongAnswers === 1 && !videoPopupShown) {
            // First wrong answer: play audio, show video, and continue game
            if (heartbeatAudio.paused) {
                heartbeatAudio.loop = true;
                heartbeatAudio.play();
                loadQuestion();
                doorSound.play();
                const ghostscream = document.getElementById("ghostScreamAudio");
                ghostscream.play();
            }
        } else if (wrongAnswers === 2) {
            // Second wrong answer: stop audio, show video popup, and end or continue game
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

// Function to stop the heartbeat audio
function stopHeartbeatAudio() {
    if (!heartbeatAudio.paused) {
        heartbeatAudio.pause();
        heartbeatAudio.currentTime = 0;
    }
}

// Set up animation for tint element
tintElement.style.animationPlayState = "running";
tintElement.addEventListener("animationiteration", function() {
    tintElement.style.animationPlayState = "running";
});

// Event listeners for video element
const video = document.getElementById("video");
video.addEventListener("ended", function() {
    video.style.display = "none";
});

// Event listeners for answer choices
answer1Element.addEventListener("click", () => {
    checkAnswer(answer1Element.textContent);
});

answer2Element.addEventListener("click", () => {
    checkAnswer(answer2Element.textContent);
});

answer3Element.addEventListener("click", () => {
    checkAnswer(answer3Element.textContent);
});

// Initial load of the first question
loadQuestion();
