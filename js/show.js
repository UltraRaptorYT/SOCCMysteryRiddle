var playVideo = () => {
  document.getElementById("video").play();
  document.getElementById("video-blocker").innerHTML = "";
  movingText();
};

var movingText = () => {
  setInterval(() => {
    document.getElementById("video-blocker").innerHTML =
      "Inspect Element aria-title";
    setTimeout(() => {
      document.getElementById("video-blocker").innerHTML = "";
    }, 1000);
  }, 7500);
};
