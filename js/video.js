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
    video.play();
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";

});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9
    console.log("Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate *= 1.1;
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
    if (video.muted) {
        document.querySelector("#mute").textContent = "Unmute";
        video.muted = false;
    } else {
        document.querySelector("#mute").textContent === "Mute";
        video.muted = true;
    }
});

document.querySelector("#vintage").addEventListener("click", function() {
    // document.querySelector("#player1").className = "oldSchool";
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});

slider.addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";

});