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

document.getElementById("body").innerHTML = `<div onclick="playVideo()">
      <div aria-title="Labcoxyzl#CHY" id="video-blocker">
        Click for SOCC Mystery Riddle Clue
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-play-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
          />
        </svg>
      </div>
      <video id="video" loop oncontextmenu="return false;">
        <source src="img/rickroll.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>`;

// (function () {
//   const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24;

//   //I'm adding this section so I don't have to keep updating this pen every year :-)
//   //remove this if you don't need it
//   let today = new Date(),
//     dd = String(today.getDate()).padStart(2, "0"),
//     mm = String(today.getMonth() + 1).padStart(2, "0"),
//     yyyy = today.getFullYear(),
//     nextYear = yyyy + 1,
//     dayMonth = "11/22/",
//     birthday = dayMonth + yyyy;

//   today = mm + "/" + dd + "/" + yyyy;
//   // if (today > birthday) {
//   //   birthday = dayMonth + nextYear;
//   // }
//   //end

//   const countDown = new Date(birthday).getTime(),
//     x = setInterval(function () {
//       const now = new Date().getTime(),
//         distance = countDown - now;

//       (document.getElementById("days").innerText = Math.floor(distance / day)),
//         (document.getElementById("hours").innerText = Math.floor(
//           (distance % day) / hour
//         )),
//         (document.getElementById("minutes").innerText = Math.floor(
//           (distance % hour) / minute
//         )),
//         (document.getElementById("seconds").innerText = Math.floor(
//           (distance % minute) / second
//         ));

//       //do something later when date is reached
//       if (distance < 0) {
//         document.getElementById("body").innerHTML = `<div onclick="playVideo()">
//       <div aria-title="Labcoxyzl#CHY" id="video-blocker">
//         Click for SOCC Mystery Riddle Clue
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           class="bi bi-play-circle-fill"
//           viewBox="0 0 16 16"
//         >
//           <path
//             d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
//           />
//         </svg>
//       </div>
//       <video id="video" loop oncontextmenu="return false;">
//         <source src="img/rickroll.mp4" type="video/mp4" />
//         Your browser does not support HTML5 video.
//       </video>
//     </div>`;
//         clearInterval(x);
//       }
//       //seconds
//     }, 0);
// })();
