const container = document.getElementById('container');
const weather = document.querySelector('p');


fetch('https://api.openweathermap.org/data/2.5/weather?lat=31.997346&lon=-102.077915&appid=9931662c9d29a785239ccf3724e38c86&units=imperial', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.main.temp);
        weather.textContent = response.main.temp + '°F';
    });