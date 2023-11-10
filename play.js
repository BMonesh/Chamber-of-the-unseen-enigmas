const videoPlayer = document.getElementById('video');

videoPlayer.addEventListener('ended', function() {
    window.location.href = 'game.html';
});

videoPlayer.addEventListener("click", () => {
    window.location.href = "game.html";
});