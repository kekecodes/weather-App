/**clock */
var clock = null;
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

clock = setInterval(updateClock, 1000);

// JavaScript code to add animation to the weather icons
const weatherIcons = document.querySelectorAll(".weather img");

for (const icon of weatherIcons) {
  icon.addEventListener("animationstart", () => {
    icon.classList.add("shake");
  });

  icon.addEventListener("animationend", () => {
    icon.classList.remove("shake");
  });
}

const weatherButton = document.querySelector(".weather-button");
const weatherForecast = document.querySelector(".weather-forecast");

weatherButton.addEventListener("click", () => {
  weatherForecast.style.display = "block";
  weatherButton.style.display = "none";
});
