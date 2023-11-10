// Get references to HTML elements using their IDs
const showInstructionsButton = document.getElementById("showInstructions");
const closeInstructionsButton = document.getElementById("closeInstructions");
const overlay = document.getElementById("overlay");
const playButton = document.getElementById("play");
var usernameInput = document.getElementById("usernameInput");

// Event listener for showing instructions overlay
showInstructionsButton.addEventListener("click", () => {
    overlay.style.display = "block";
});

// Event listener for closing instructions overlay
closeInstructionsButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

// Get references to additional HTML elements
const play_button = document.getElementById("play-button");
const login = document.getElementById("input");

// Event listener for showing login input on play button click
play_button.addEventListener("click", () => {
    login.style.visibility = "visible";
})

// Event listener for handling play button click
document.addEventListener("DOMContentLoaded", function () {
    playButton.addEventListener("click", function () {
        // Get the trimmed value of the entered username
        const username = usernameInput.value.trim();

        // Check if the username is empty
        if (username === "") {
            alert("Please enter your username before playing.");
        } else {
            // Store the username in local storage and redirect to play.html
            window.localStorage.setItem('user', JSON.stringify(usernameInput.value));
            window.location.href = "play.html"
        }
    });
});

// Get reference to background audio element
const backgroundAudio = document.getElementById("background");

// Function to play the background audio
function playsound() {
    backgroundAudio.play()
}

// Play background audio when the window is fully loaded
window.onload = playsound;
