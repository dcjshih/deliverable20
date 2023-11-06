var video = document.getElementById('player1');
var volumeSpan = document.getElementById('volume');
var slider = document.getElementById('slider');

window.addEventListener("load", function() {
    video.autoplay = false;
    video.loop = false;

    console.log("Good job opening the window");
});

document.querySelector("#pause").addEventListener("click", function() {
    if (video.paused) {
        console.log("Video is already paused.");
    } else {
        video.pause();
    }
});

document.querySelector("#play").addEventListener("click", function() {
    if (video) {
        video.play();
    } else {
        console.error("Video element is not defined");
    }
});

slider.addEventListener("input", function() {
    video.volume = this.value / 100;
    volumeSpan.textContent = this.value + "%";
});