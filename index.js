const container = document.getElementById('container');
const weather = document.querySelector('p');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=9931662c9d29a785239ccf3724e38c86&s=temp', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });