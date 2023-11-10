const gameover = document.getElementById("loss");
const retry = document.getElementById("retry");
var username = window.localStorage.getItem('user');
const gameOverPhrases = [
    "You have succumbed to the darkness...",
    "Your nightmares have become your reality...",
    "The abyss claims another soul...",
    "Eternal darkness awaits you...",
    "There is no escape from the terrors that lurk...",
    "You have been consumed by the shadows...",
    "In this realm, death is just the beginning...",
    "Your fate is sealed in this haunted place...",
    "The horrors have won, and you are lost forever...",
    "You are trapped in a nightmare with no waking up...",
    
  ];
  

const randomGameOverPhrase = gameOverPhrases[Math.floor(Math.random() * gameOverPhrases.length)];
gameover.textContent = `${JSON.parse(username)}, ${randomGameOverPhrase}`;

retry.addEventListener("click", () => {
    window.location.href = "play.html"
})

function background() {
    const backgroundmusic = document.getElementById("harold");
    backgroundmusic.addEventListener("canplay", function() {
        backgroundmusic.volume = 0.5;
    });
}

document.addEventListener("DOMContentLoaded", background);
