
const progressBar = document.getElementById("progressbar");
const masterPlay = document.querySelector(".fa-circle-play"); // initial icon element
const audio = new Audio("TV Girl - Lovers Rock - starstarstar.mp3");
const circle = document.querySelector(".cd");

masterPlay.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    circle.style.animationPlayState = "running";

  } else {
    audio.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    circle.style.animationPlayState = "paused";
  }
});



audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration) && audio.duration > 0) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
  }
});

progressBar.addEventListener("input", () => {
  if (!isNaN(audio.duration) && audio.duration > 0) {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
  }
});

audio.addEventListener("loadedmetadata", () => {
  if (!isNaN(audio.duration) && audio.duration > 0) {
    progressBar.value = 0;
  }
});

audio.addEventListener("ended", () => {
  masterPlay.classList.remove("fa-circle-pause");
  masterPlay.classList.add("fa-circle-play");
  progressBar.value = 0;
});


