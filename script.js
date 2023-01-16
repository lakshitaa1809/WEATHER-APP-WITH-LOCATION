var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#submit");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
const apik = "43dfaa8e5c48c3c8692801ea3f8fde3a";
function convertion(val) {
  return (val - 273).toFixed(2);
}
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var nameval = data.name;
      var descrip = data.weather[0].description;
      var tempature = data.main.temp;
      var wndspd = data.wind.speed;
      city.innerHTML = "Weather of " + data.name + "," + data.sys.country;
      temp.innerHTML = "Temperature: " + convertion(tempature) + "C";
      description.innerHTML = "Sky Conditions: " + descrip;
      wind.innerHTML = "Wind Speed:" + wndspd + "km/h";
    })
    .catch((err) => alert("You entered Wrong city name"));
});
