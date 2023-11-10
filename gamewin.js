const win = document.getElementById("win");
const retry = document.getElementById("retry");
var username = window.localStorage.getItem('user');
const winMessages = [
    "You escaped the horror mansion!",
    "Survivor: Mansion Conquered!",
    "Victory: Mansion Vanquished!",
    "Freedom found in the mansion's escape.",
    "You've outsmarted the mansion's evil."
];
  
// To select a random win message from the array, you can use the following code:
const randomWinMessage = winMessages[Math.floor(Math.random() * winMessages.length)];
win.textContent = `${JSON.parse(username)}, ${randomWinMessage}`;

retry.addEventListener("click", () => {
    window.location.href = "play.html"
})
function background() {
    const backgroundmusic = document.getElementById("sweet");
    backgroundmusic.addEventListener("canplay", function() {
        backgroundmusic.volume = 0.5;
    });
}

document.addEventListener("DOMContentLoaded", background);
