document.addEventListener("DOMContentLoaded", function () {
  console.log("this is from the cdn");
  const video = document.querySelector('[f-data-video="video-element"]');
  const topicButtons = document.querySelectorAll(
    '[f-data-video="topic-button"]'
  );
  topicButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const startTime = this.getAttribute("data-start-time");
      if (video) {
        video.currentTime = startTime; // Jump to the specified time
        video.play();
      }
    });
  });
});
