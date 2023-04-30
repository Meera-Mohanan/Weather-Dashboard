const timeEl = document.getElementByID('time');
const dateEl = document.getElementByID('date');
const currentWeatherItems = document.getElementByID('current-weather-items');
const timezone = document.getElemnetById('time-zone');
const countryEl = document.getElemnetById('country');
const weatherForecastEl = document.getElemnetById('weather-forecast');
const currentTempEl = document.getElemnetById('current-temp');
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
const searchInput = document.querySelector('.search-input');
const clearSearchButton = document.querySelector('.clear-search');

clearSearchButton.addEventListener('click', () => {
  searchInput.value = ''; // Clear the search input field
});

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = '6ff082132626dd95015f6bf3e2f0aaff'
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursin12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = hoursin12HrFormat = ':' + minutes + ' ' + '<span id="am-pm">${ampm}</span>'
    dateEl.innerHTML = days[day] + ',' + date + ' ' + months[month]
}, 1000);

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude,longitude} = success.coords;

        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=$
        {latitude}&lon=${longitude}&exclude=hourly,minutely&units-metric&
        appid=${API key}').then(res => res.json()).then(data => {

            console.log(data)
            showWeatherData(data);
        })
    })
}

function showWeatherData(data){


}