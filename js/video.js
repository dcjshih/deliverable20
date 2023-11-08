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

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.1
    console.log("Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate += 0.1;
    console.log("Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    if (video.ended) {
        video.currentTime = 0;
    }
    console.log("Position: " + video.currentTime);


});
document.querySelector("#mute").addEventListener("click", function() {
    if (document.querySelector("#mute").textContent === "Mute") {
        document.querySelector("#mute").textContent = "Unmute";
        video.muted = true;
    } else {
        document.querySelector("#mute").textContent === "Mute";
        video.muted = false;
    }
});

document.querySelector("#vintage").addEventListener("click", function() {
    document.querySelector("#player1").className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
    document.querySelector("#player1").className = "video";
});

slider.addEventListener("input", function() {
    video.volume = this.value / 100;
    volumeSpan.textContent = this.value + "%";
});