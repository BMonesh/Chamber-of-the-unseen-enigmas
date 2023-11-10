// Get references to HTML elements
const gameover = document.getElementById("loss");
const retry = document.getElementById("retry");

// Retrieve username from local storage
var username = window.localStorage.getItem('user');

// Array of game over phrases
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

// Generate a random game over phrase
const randomGameOverPhrase = gameOverPhrases[Math.floor(Math.random() * gameOverPhrases.length)];

// Display the game over message with the username and a random game over phrase
gameover.textContent = `${JSON.parse(username)}, ${randomGameOverPhrase}`;

// Event listener for retry button click
retry.addEventListener("click", () => {
    // Redirect to "play.html" to retry the game
    window.location.href = "play.html";
});

// Function to set up background music volume
function background() {
    const backgroundmusic = document.getElementById("harold");
    backgroundmusic.addEventListener("canplay", function() {
        // Set the volume of the background music to 0.5
        backgroundmusic.volume = 0.5;
    });
}

// Event listener for when the DOM is fully loaded to invoke the background function
document.addEventListener("DOMContentLoaded", background);
