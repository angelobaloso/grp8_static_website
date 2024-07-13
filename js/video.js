const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const videoPlayer = document.getElementById('videoPlayer');

playButton.addEventListener('click', () => {
    videoPlayer.play();
});

pauseButton.addEventListener('click', () => {
    videoPlayer.pause();
});

function closeNav() {
    overlayNav.classList.remove('show');
}
