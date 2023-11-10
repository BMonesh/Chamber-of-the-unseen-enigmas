// Get references to HTML elements
const win = document.getElementById("win");
const retry = document.getElementById("retry");

// Retrieve username from local storage
var username = window.localStorage.getItem('user');

// Array of win messages
const winMessages = [
    "You escaped the horror mansion!",
    "Survivor: Mansion Conquered!",
    "Victory: Mansion Vanquished!",
    "Freedom found in the mansion's escape.",
    "You've outsmarted the mansion's evil."
];

// Generate a random win message
const randomWinMessage = winMessages[Math.floor(Math.random() * winMessages.length)];

// Display the win message with the username and a random win message
win.textContent = `${JSON.parse(username)}, ${randomWinMessage}`;

// Event listener for retry button click
retry.addEventListener("click", () => {
    // Redirect to "play.html" to retry the game
    window.location.href = "play.html";
});

// Function to set up background music volume
function background() {
    const backgroundmusic = document.getElementById("sweet");
    backgroundmusic.addEventListener("canplay", function() {
        // Set the volume of the background music to 0.5
        backgroundmusic.volume = 0.5;
    });
}

// Event listener for when the DOM is fully loaded to invoke the background function
document.addEventListener("DOMContentLoaded", background);
