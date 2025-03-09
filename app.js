const nextButton = document.querySelector(".next-btn");

const video = document.querySelector(".hero-video");

const moveList = ["hero-1.mkv", "hero-2.mkv", "hero-3.mkv", "hero-4.mkv"];

let index = 0;
nextButton.addEventListener("click", function () {
  index += 1;
  video.src = moveList[index];

  if (index === 3) {
    index = -1;
  }
});
