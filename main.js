const showInstructionsButton = document.getElementById("showInstructions");
const closeInstructionsButton = document.getElementById("closeInstructions");
const overlay = document.getElementById("overlay");
const playButton = document.getElementById("play");
var usernameInput = document.getElementById("usernameInput");

showInstructionsButton.addEventListener("click", () => {
    overlay.style.display = "block";
});

closeInstructionsButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

const play_button = document.getElementById("play-button");
const login = document.getElementById("input");
play_button.addEventListener("click", () => {
    login.style.visibility = "visible";
})

document.addEventListener("DOMContentLoaded", function () {
    playsound()
    playButton.addEventListener("click", function () {
        const username = usernameInput.value.trim(); // Remove leading/trailing whitespace
        if (username === "") {
            alert("Please enter your username before playing.");
        } else {
            window.localStorage.setItem('user', JSON.stringify(usernameInput.value));
            window.location.href = "play.html"
        }
    });
});
function playsound(){
    const backgroundAudio = document.getElementById("background");
    backgroundAudio.volume = 0.1;
    // backgroundAudio.play();
}

// playButton.addEventListener("click", () => {
//     localStorage.setItem('user', usernameInput.value);
// })
// document.addEventListener("load", () => {
//     playsound()
// })