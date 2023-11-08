const showInstructionsButton = document.getElementById("showInstructions");
const closeInstructionsButton = document.getElementById("closeInstructions");
const overlay = document.getElementById("overlay");

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
    const playButton = document.getElementById("play");
    const usernameInput = document.getElementById("usernameInput");

    playButton.addEventListener("click", function () {
        const username = usernameInput.value.trim(); /// Remove leading/trailing whitespace

        if (username === "") {
            alert("Please enter your username before playing.");
        } else {
            window.location.href = "play.html"
        }
    });
});
