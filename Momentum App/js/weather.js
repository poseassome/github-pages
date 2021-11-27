const API_KEY = "8f96423a04eb1a12e5052e0c77f159be";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:nth-child(2)");
    const temp = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}`;
    temp.innerHTML = `${data.main.temp}&#8451;`
  });
};

function onGeoError() {
  alert("Can't find you. No weather for you.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);