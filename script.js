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

  const popup = document.getElementById("exit-popup");
  const stayButton = document.getElementById("stay-btn");
  let popupShown = false;

  const showPopup = () => {
    if (!popupShown) {
      popup.classList.add("show");
      popupShown = true;
    }
  };

  stayButton.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // closing the tab
  window.addEventListener("beforeunload", (event) => {
    showPopup();
    event.preventDefault();
    event.returnValue = ""; // Required for some browsers
  });

  // typing in search bar
  window.addEventListener("blur", () => {
    setTimeout(() => {
      if (document.activeElement === document.body) {
        showPopup();
      }
    }, 100);
  });
});
