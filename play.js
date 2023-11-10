// Get reference to the video element using its ID
const videoPlayer = document.getElementById('video');

// Event listener for the 'ended' event of the video
videoPlayer.addEventListener('ended', function() {
    // Redirect to 'game.html' when the video ends
    window.location.href = 'game.html';
});

// Event listener for the 'click' event of the video
videoPlayer.addEventListener("click", () => {
    // Redirect to 'game.html' when the video is clicked
    window.location.href = "game.html";
});
