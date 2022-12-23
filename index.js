const container = document.getElementById('container');
const weather = document.querySelector('p');


fetch('https://api.openweathermap.org/data/2.5/weather?lat=31.997346&lon=-102.077915&appid=&units=imperial', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        weather.textContent = "Current Midland Teperature: " + response.main.temp + '°F';
    });



const city = document.getElementById('city');
const submit = document.getElementById('submit');




